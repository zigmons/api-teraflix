//importando o modulo de terceiro, o express
const express = require("express");
//instanciando o express
const app = express();

const cors = require("cors");
app.use(cors());

const moviesRoutes = require("./routes/moviesRoutes");
//definir a rota principal da api
app.use("/movies", moviesRoutes);

module.exports = app;