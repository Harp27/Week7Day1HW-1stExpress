const express = require("express")

const app = express()

app.listen(3001,() => {
    console.log("Listening")
})

app.get("/", (req, res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>`)
});

app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);
    const nextNumber = numberOfBottles - 1;

const link = numberOfBottles > 0 ? `<a href="/${nextNumber}">Take one down pass it around</a>` : "";
const startOverLink = `<a href="/">Start over</a>`

res.send(`
    <h1>${numberOfBottles} Bottles of beer of the wall</h1>
    ${link}
    ${startOverLink}
    `)
});