const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Submitter = require("./models/submitterModel.js");
require("dotenv").config();

// Database
mongoose.connect(process.env.ATLAS_URI)
.then(() => console.log("MongoDB is connected successfully"))
.catch((error) => console.error(error));

// Server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/client' ));

app.get('/', function( req, res ) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.post('/', async (req, res) => {
    const { name, email, interest } = req.body;
    
    let submitter = await Submitter.findOne({ email });
    if (submitter) {
        submitter.interests.push(interest);
    }
    else {
        submitter = await Submitter.create({ name, email, interests: [interest] });
    }
    submitter.save();
});

app.listen(process.env.PORT || 3000);