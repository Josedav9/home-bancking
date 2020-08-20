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
    res.status(200).json({ message: "Se creo exitosamente" });
  } catch (error) {
    res
      .status(400)
      .json({ err: "Verifique que los datos se enviaron correctamente" });
  }
});

router.get("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(users);
  const loggedUser = users.find(
    (user) => (user._email === email, user._password === password)
  );
  if (loggedUser) {
    res.status(200).json({ user: loggedUser });
  } else {
    res.status(404).json({ err: "No se ha encontrado el usuario" });
  }
});

module.exports = router;
