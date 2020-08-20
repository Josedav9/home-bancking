const express = require("express");
const router = express.Router();
const store = require("../store/store");
const User = require("../models/user");
let users = [];

store.readFile().then((data) => {
  if (data) {
    users = JSON.parse(data);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, lastName, email, password, dni } = req.body;
    const newUser = new User(Date.now(), name, lastName, email, password, dni);
    users.push(newUser);
    store.appendFile(users);
    res.json({ message: "Se creo exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ err: error });
  }
});

module.exports = router;
