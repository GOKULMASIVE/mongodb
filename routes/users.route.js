import express from "express";

import { userSignup,getUsers } from "./userSignup.js";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const data = req.body;
  const result=await userSignup(data);
  res.send(result);
});

router.get("/signup",async function(req,res){
    const result=await getUsers();
    res.send(result);
})
export default router;
