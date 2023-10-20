import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"
import MoviesRouter from './routes/movies.route.js'


dotenv.config();

const app = express();

const PORT = process.env.PORT;
 
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); //phone dial
// top level await...
await client.connect(); //call button
console.log("Mongodb connected");

app.use(express.json());
app.get(`/`, function (request, response) {
  response.send("This is home page:)🏡😅😎");
});
 
app.use("/movies",MoviesRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
