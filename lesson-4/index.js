const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://databaseusername:databaseusername@cluster0.yciqo8l.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("connect successfly with data basa");
}).catch(() => {
    console.log("err: faild to connect to daba base")
})

app.use(express.json());

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

app.get("/find2", (req ,res) => {
    console.log(req.body)
});

app.listen(3000, function(){
    console.log("I am listening in port 3000")
});