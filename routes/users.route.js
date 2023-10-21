import express from "express";
import bcrypt from "bcrypt";
import { userSignup, getUsers, getUserByName } from "./userSignup.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const { user, password } = req.body;
  const userName = await getUserByName(user);
  console.log("userName:", userName);
  if (userName) {
    res.status(400).send({ message: "This name is already Exist" });
  } else if (password.length < 8) {
    res.status(400).send({ Message: "Password must be above 8 character " });
  } else {
    const result = await userSignup({ user, password });
    res.send(result);
  }
});

router.post("/login", async function (req, res) {
  const { user, password } = req.body;
  const userName = await getUserByName(user);
  if (userName) {
    const storedPassword = userName.pass;
    const isPaswwordMatch = await bcrypt.compare(password, storedPassword);

    if (isPaswwordMatch) {
      const token=  jwt.sign({id:userName._id},process.env.SECRET_KEY);
      res.send({ message: "Login Successfully" ,token:token});
    } else {
      res.status(400).send({ message: "Password is inncorrect!!!" });
    }
  } else {
    res.status(400).send({ message: "This user is not Exist" });
    
  }
});

router.get("/signup", async function (req, res) {
  // console.log(req.query);
  const result = await getUsers();
  res.send(result);
});
export default router;
