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
  return await client.db("mca").collection("movies").insertOne(data);
}

async function getMovieById(id) {
  return await client.db("mca").collection("movies").findOne({ id: id });
}

async function getMovieByName(request) {
  return await client
    .db("mca")
    .collection("movies")
    .findOne(request.query)
    .toArray();
}

async function getAllMovies(){
  return await client.db("mca").collection("movies").find().toArray();
}

export {
  updateMovie,
  InsertMovies,
  DeleteMovie,
  getAllMovies,
  getMovieById,
  getMovieByName
};
