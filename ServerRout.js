const express = require("express");
const fs = require("fs")
const router = express.Router();
const Form = require("./ServerSchema");

router.get("/", async (req, res) => {
    try {
        res.json(await Form.find((err, doc) => { console.log(doc); }));
    } catch (err) {
        console.log(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        res.json(await Form.findById(req.params.id, (err, doc) => { console.log(doc); }));
    } catch (err) {
        console.log(err);
    }
});
router.post('/img', function (req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream('./client/public/imges/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.redirect('back');
        });
    });
});
router.post("/", async (req, res) => {


    const form = new Form({
        dp: req.body.dp,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        gender: req.body.gender,
        hobbies: req.body.hobbies,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        states: req.body.states,
        pincode: req.body.pincode,
        mobile: req.body.mobile,
        about: req.body.about,
        feedback: req.body.feedback,
        suggestion: req.body.suggestion


    });

    try {
        res.json(await form.save((err, doc) => { console.log(doc); }));
    } catch (err) {
        console.log(err);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const form = new Form({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        gender: req.body.gender,
        hobbies: req.body.hobbies,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        states: req.body.state,
        pincode: req.body.pincode,
        mobile: req.body.mobile,
        about: req.body.about,
        feedback: req.body.feedback,
        suggestion: req.body.suggestion,


    });

    try {
        res.json(
            await Form.updateOne(
                { _id: id },
                {
                    $set: {
                        fname: req.body.fname,
                        lname: req.body.lname,
                        email: req.body.email,
                        gender: req.body.gender,
                        hobbies: req.body.hobbies,
                        address1: req.body.address1,
                        address2: req.body.address2,
                        city: req.body.city,
                        states: req.body.state,
                        pincode: req.body.pincode,
                        mobile: req.body.mobile,
                        about: req.body.about,
                        feedback: req.body.feedback,
                        suggestion: req.body.suggestion,
                    },
                }
            )
        );
    } catch (err) {
        console.log(err);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        res.json(await Form.deleteOne({ _id: id }));
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;
