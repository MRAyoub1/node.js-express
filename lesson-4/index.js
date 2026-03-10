const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");

const app = express();

mongoose.connect("mongodb+srv://databaseusername:databaseusername@cluster0.yciqo8l.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("connect successfly with data basa");
}).catch(() => {
    console.log("err: faild to connect to daba base")
})

app.use(express.json());



app.get("/admin", function(req, res){
    res.send("hello Admin");
})

app.get("/find/:number1/:number2", (req ,res) => {
    const num1 = req.params.number1
    const num2 = req.params.number2
    res.send(`the numbers are :${num1}/${num2}`);
})

app.get("/find2", (req ,res) => {
    console.log(req.body)
});

app.post("/articles", async (req, res) => {
    const artTitle = req.body.title;
    const artBody = req.body.body;
    const artNum = req.body.number;
    const newArticle = new Article();
    newArticle.title = artTitle;
    newArticle.body = artBody;
    newArticle.number = artNum;
    await newArticle.save();
    res.send("tamaamo tamaaam");
})

app.listen(3000, function(){
    console.log("I am listening in port 3000")
});