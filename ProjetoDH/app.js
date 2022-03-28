const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3200;
 
app.get("/sobre", function(req, res)  {
    res.send("Olá grupo 01")
});

app.get("/contato", function(request, response){
    response.send("Projeto concluído!!")
});

app.listen (PORT,function(){
    console.log ('porta:' + PORT);
});
