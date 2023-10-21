import express from "express";

import { userSignup } from "./userSignup.js";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const data = req.body;
  const result=await userSignup(data);
  res.send(result);
});
export default router;
