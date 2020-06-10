const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req, res){
  res.send("<h2>Contact me at: joseacb144@gmail.com</h2>");
})

app.get("/about", function(req, res){
  res.send("Hello there! My name is Jose Chavez. I am a computer science student at Texas State University. I should have my Master of Science in Computer Science by Fall 2021!");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
