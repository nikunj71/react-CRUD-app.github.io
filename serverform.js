const express = require("express");
const app = express();
const fileUpload = require('express-fileupload');
const busboy = require('connect-busboy');
const mongoose = require("mongoose");
const bodyParese = require("body-parser");
const FormRouter = require("./ServerRout");
const cors = require("cors");
app.use(cors());
app.use(bodyParese.json());
app.use(busboy());
app.use("/form", FormRouter);
app.use(fileUpload());
app.use(express.static("Public"))

mongoose
    .connect("mongodb://localhost:27017/form", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected sucessfully......................"))
    .catch((err) => {
        console.log(err);
    });
const port = process.env.PORT || 3050;
app.listen(port, () => console.log(`Server listning on port ${port}`));
