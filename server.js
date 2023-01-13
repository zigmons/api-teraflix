const app = require("./src/app");
const PORT = 8080;
//1313, 3003, 3030, 6000, 6060, 8000, 8080


//app.listen()
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});