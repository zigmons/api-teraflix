const express = require("express");
const router = express.Router();

const controllers= require("../controllers/movierControllers")
//ver todos os filmes disponiveis
router.get("/all", controllers.getAll);

module.exports = router;