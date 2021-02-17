const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    dp: {
        type: String,
        require: true,
    },
    fname: {
        type: String,
        require: true,
    },
    lname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    hobbies: {
        type: Array,
        require: true,
    },
    address1: {
        type: String,
        require: true,
    },
    address2: {
        type: String,
        require: true,
    },
    city: {
        type: Object,
        require: true,
    },
    states: {
        type: Object,
        require: true,
    },
    pincode: {
        type: Number,
        require: true,
    },
    mobile: {
        type: Number,
        require: true,
    },
    about: {
        type: Object,
        require: true,
    },
    feedback: {
        type: String,
        require: true,
    },
    suggestion: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Form", formSchema);
