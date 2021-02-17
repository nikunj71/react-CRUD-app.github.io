const express = require("express");
const app = express();
const querystring = require("querystring");
const bodyparser = require("body-parser");
const fs = require("fs");
const urlencodeParser = bodyparser.urlencoded({ extended: false });
const jsonParser = bodyparser.json();
const port = process.env.PORT || 3012; // when poduction this use this change port localtion automatically
app.use("/css", express.static(__dirname + "/Public/css")); // Middelware

app.use("/", (req, res, next) => {
    // using this Middelware get the path in console.log()
    console.log("this is " + req.url);
    res.cookie("Cookiename", "CookieValue");
    next();
});

app.get("/", (req, res) => {
    res.send(
        `   <html>
        <head>
        <link type="text/css" rel="stylesheet" href="/css/style.css">
        </head>
      <body>
        <h1>Hello guide</h1>
        <a href="http://localhost:3012/api">Api</a>
        <a href="http://localhost:3012/api/card?brand=nikunj&year=2017">Card</a>
        <a href="http://localhost:3012/newuser">Form</a>

        
      </body>
    </html>`
    );
});

app.get("/newuser", (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`);
    res.send(`${HTML}`);
});
app.post("/enteruser", urlencodeParser, (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log(firstname);
    console.log(lastname);
    res.send(200);

});
app.get("/newuser_post", (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/jsonP ost.html`);
    console.log(HTML)
    res.send(`${HTML}`);
});
app.post("/enteruser_post", jsonParser, (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.get("/api", (req, res) => {
    const json = {
        name: "nikunj",
        fullname: ["nikunj", "dhaduk"],
    };
    res.send(json);
});

app.get("/api/:name/:fullname", (req, res) => {
    let id = req.params.name;
    let username = req.params.fullname;
    res.send(
        `<html>
      <body>
        <h1>
          Hello ${id},${username}
        </h1>
      </body>
    </html>`
    );
});

app.get("/api/card", (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;
    res.send({
        brand,
        year,
    });
});

app.listen(port);