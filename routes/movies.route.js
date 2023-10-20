import express from 'express'
import {client} from '../index.js'
const router=express.Router();


router.get(`/`, async function (request, response) {
  if (request.query.rating) {
    request.query.rating = Number(request.query.rating);
  }
  console.log(request.query);
  const data = await client
    .db("mca")
    .collection("movies")
    .find(request.query)
    .toArray();
  response.send(data);
});

router.get(`/:id`, async function (request, response) {
  const { id } = request.params;

  const movie = await client.db("mca").collection("movies").findOne({ id: id });
  //   console.log(movie);

  // const val=movies.find((item)=>item.id===id)
  movie ? response.send(movie) : response.status(404).send("Page Not found:(");
});
// express.json()-middleware
router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db("mca").collection("movies").insertMany(data);
  response.send(result);
});

router.delete(`/:id`, async function (request, response) {
  const { id } = request.params;

  const movie = await client
    .db("mca")
    .collection("movies")
    .deleteOne({ id: id });
  //   console.log(movie);

  // const val=movies.find((item)=>item.id===id)
  movie.deletedCount > 0
    ? response.send({ msg: "Movie was deleted successfully:)" })
    : response.status(404).send({ msg: "Movie Not found:(" });
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await client
    .db("mca")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });

  res.send(result);
});

export default router;