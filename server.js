const express = require("express")

const app = express()

app.listen(3000,() => {
    console.log("Listening")
})

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`)
})
// come back to the tip calc
app.get("/tip/:total/:tipPercentage", (req, res) =>{
    const tipPercentage = req.params.tipPercentage;
    res.send(tipPercentage);
})

const magic8BallResponses = [
    "It is certain",
     "It is decidedly so",
      "Without a doubt",
       "Yes definitely",
       "You may rely on it",
        "As I see it yes",
         "Most likely",
          "Outlook good",
          "Yes",
           "Signs point to yes",
           "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
             "Cannot predict now",
              "Concentrate and ask again",
              "Don't count on it",
               "My reply is no",
                "My sources say no",
                "Outlook not so good",
                 "Very doubtful"
]

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]
    const htmlResponse = `<h1>Will I Be A Millionaire?</h1><h1>Answer: ${randomResponse}</h1>`
    res.send(htmlResponse);
})