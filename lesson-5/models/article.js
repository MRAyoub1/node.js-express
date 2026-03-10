const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleschema = new schema({
    title: String,
    body: String,
    number: Number,
})

const Article = mongoose.model("Article", articleschema)


module.exports = Article;