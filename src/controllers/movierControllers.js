const movies = require("../models/movies.json");


//Demandas: ver todos os filmes disponiveis

const getAll = (request, response) =>{
    //gerencia o que chega da requisicao e envia uma resposta
    response.status(200).send(movies)
};



module.exports = {
    getAll,
};