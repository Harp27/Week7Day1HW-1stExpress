const express = require("express")

const app = express()

app.listen(3001,() => {
    console.log("Listening")
})

app.get("/", (req, res) => {
    res.send(`99 Bottles of beer on the wall`)
})