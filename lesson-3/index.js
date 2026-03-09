const express = require("express");

const app = express();

app.get("/hello", function(req, res){
    res.send("hello");
})

app.get("/admin", function(req, res){
    res.send("hello Admin");
})

app.post("/addComment", (req ,res) => {
    res.send("welcom to post req");
})


app.get("/find/:number1/:number2", (req ,res) => {
    const num1 = req.params.number1
    const num2 = req.params.number2
    res.send(`the numbers are :${num1}/${num2}`);
})

app.listen(3000, function(){
    console.log("I am listening in port 3000")
});