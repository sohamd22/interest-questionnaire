const mongoose = require("mongoose");

const submitterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    interests: []
});

module.exports = mongoose.model("Submitter", submitterSchema);