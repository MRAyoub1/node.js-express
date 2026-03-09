const express = require("express");

const app = express();

app.get("/hello", function(req, res){
    res.send("hello");
})


app.listen(3000, function(){
    console.log("I am listening in port 3000")
});