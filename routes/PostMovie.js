import { InsertMovies } from "./movies.service.js";
import express from "express";

 const router=express.Router();

router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await InsertMovies(data);
  response.send(result);
});

export default router;