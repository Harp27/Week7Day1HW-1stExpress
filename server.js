const express = require("express")

const app = express()

app.listen(3000,() => {
    console.log("Listening")
})

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`)
})

app.get("/tip/:total/:tipPercentage", (req, res) =>{
    const tipPercentage = req.params.tipPercentage;
    res.send(tipPercentage);
})