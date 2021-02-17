const express = require("express");
const app = express();
const port = process.env.PORT || 3013;
app.get("/api/user", (req, res) => {
    res.json([{
            id: 1,
            username: "nikunj",
        },
        {
            id: 2,
            username: "Raj",
        },
    ]);
});
app.get("/api/cars", (req, res) => {
    res.json([{
            id: 1,
            brand: "Forad",
        },
        {
            id: 2,
            brand: "Suzuki",
        },
    ]);
});
app.listen(port);