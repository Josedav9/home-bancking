const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, () => {
  console.log("Servidor escuchando por el puerto 3000");
});