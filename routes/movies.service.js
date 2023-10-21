import { client } from "../index.js";

async function updateMovie(id, data) {
  return await client
    .db("mca")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}

async function DeleteMovie(id) {
  return await client.db("mca").collection("movies").deleteOne({ id: id });
}

async function InsertMovies(data) {
  return await client.db("mca").collection("movies").insertMany(data);
}

async function getMovieById(id) {
  return await client.db("mca").collection("movies").findOne({ id: id });
}

async function getAllMovies(request) {
  return await client
    .db("mca")
    .collection("movies")
    .find(request.query)
    .toArray();
}

export {
  updateMovie,
  InsertMovies,
  DeleteMovie,
  getAllMovies,
  getMovieById,
};
