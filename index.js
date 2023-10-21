import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import MoviesRouter from "./routes/movies.route.js";
import PostMovieRouter from "./routes/PostMovie.js"
import usersRouter from "./routes/users.route.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); //phone dial
// top level await...
await client.connect(); //call button
console.log("Mongodb connected");

app.use(express.json());
app.use(cors());
app.get(`/`, function (request, response) {
  response.send("");
});

app.use("/movies", MoviesRouter);
app.use("/add-movies",PostMovieRouter)
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
