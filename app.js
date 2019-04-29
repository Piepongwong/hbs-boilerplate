const express = require("express")
const app = express()
var hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.get("/", (req,res)=> {
    res.render("home")
})

app.get("/contact", (req,res)=> {
    res.render("contact")
})

app.listen(3000, ()=> {
    console.log("listening")
})