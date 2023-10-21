import express from "express";
import { auth } from "../middleware/auth.js";
import {
  updateMovie,
  DeleteMovie,
  getAllMovies,
  getMovieById,
  getMovieByName,
  InsertMovies
} from "../routes/movies.service.js";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get(`/`, async function (request, response) {
  const data = await getAllMovies();
  response.send(data);
});

router.get(`/`, async function (request, response) {
  if (request.query.rating) {
    request.query.rating = Number(request.query.rating);
  }
  console.log(request.query);
  const data = await getMovieByName(request);
  response.send(data);
});

router.get(`/:id`, async function (request, response) {
  const { id } = request.params;

  const movie = await getMovieById(id);

  movie ? response.send(movie) : response.status(404).send("Page Not found:(");
});
router.delete(`/:id`, async function (request, response) {
  const { id } = request.params;
  const new_id=new ObjectId(id);
  const movie = await DeleteMovie(new_id);

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

router.post("/", async function (request, response) {
  const data = request.body;
  const result = await InsertMovies(data);
  response.send(result);
});

export default router;
