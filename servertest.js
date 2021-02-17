const express = require("express")
const app = express()
const port = process.env.PORT || 3002
    // console.log("hello");
    // res.send("hello")
app.get("/api", (req, res) => {
    res.json(
        [{
            name: "nikunj",
            lastname: "dhaduk"
        }]
    )
})
app.listen(port)