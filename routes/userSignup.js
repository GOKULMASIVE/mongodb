import { client } from "../index.js";
import bcrypt from "bcrypt";

async function getHashPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashPass = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashPass);
  return hashPass;
}

async function userSignup(data) {
  // console.log("data:", data);
  const { user, password } = data;
  const pass = await getHashPassword(password);
  return await client.db("mca").collection("users").insertOne({ user, pass });
}

async function getUserByName(userName) {
  return await client.db("mca").collection("users").findOne({ user: userName });
}

async function getUsers() {
  // console.log(request.query);
  return await client.db("mca").collection("users").find().toArray();
}

export { userSignup, getUsers, getUserByName };
