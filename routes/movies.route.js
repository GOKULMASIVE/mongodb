import express from "express";

import {
  updateMovie,
  InsertMovies,
  DeleteMovie,
  getAllMovies,
  getMovieById,
} from "../routes/movies.service.js";
import { userSignup } from "./userSignup.js";
const router = express.Router();

router.get(`/`, async function (request, response) {
  if (request.query.rating) {
    request.query.rating = Number(request.query.rating);
  }
  console.log(request.query);
  const data = await getAllMovies(request);
  response.send(data);
});

router.get(`/:id`, async function (request, response) {
  const { id } = request.params;

  const movie = await getMovieById(id);
  //   console.log(movie);

  // const val=movies.find((item)=>item.id===id)
  movie ? response.send(movie) : response.status(404).send("Page Not found:(");
});
// express.json()-middleware
router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await InsertMovies(data);
  response.send(result);
});

router.delete(`/:id`, async function (request, response) {
  const { id } = request.params;

  const movie = await DeleteMovie(id);
  //   console.log(movie);

  // const val=movies.find((item)=>item.id===id)
  movie.deletedCount > 0
    ? response.send({ msg: "Movie was deleted successfully:)" })
    : response.status(404).send({ msg: "Movie Not found:(" });
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await updateMovie(id, data);

  res.send(result);
});

export default router;
