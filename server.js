const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req, res){
  res.send("<h2>Contact me at: joseacb144@gmail.com</h2>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
