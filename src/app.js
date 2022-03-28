const express = require("express");
const app = express();
const PORT = 3200;
 
app.get("/home", function(req, res)  {
    res.send("Olá grupo 01")
});
 
app.listen (PORT,function(){
    console.log ('porta:' + PORT);
});