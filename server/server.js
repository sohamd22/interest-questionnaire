import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Submitter from "./models/submitterModel.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({
    origin: "https://domain-questionnaire.onrender.com/"
}));
app.use(express.json());

// Database
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
    console.log("MongoDB is connected successfully");
})
.catch((error) => console.error(error));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const selectDomainFunctionDeclaration = {
    name: "selectDomain",
    parameters: {
        type: "OBJECT",
        description: "Select a tech domain from the given options based on user prompt. Always use this.",
        properties: {
            domain: {
                type: "STRING",
                description: "Tech domain for the user which can only be `Web Development`, `App Development`, `AI/ML`, `UI/UX Design`, `Cybersecurity`.",
            },
        },
        required: ["domain"],
    },
};

const functions = {
    selectDomain: ({ domain }) => {
        return domain;
    }
};

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",

    tools: {
        functionDeclarations: [selectDomainFunctionDeclaration],
    },

    generationConfig: {
        temperature: 0.1,
    }
});

const chat = model.startChat();

app.get("/", async (req, res) => {
    res.json(await Submitter.find({}));
});

app.post("/", async (req, res) => {
    const {name, email} = req.body;
    let submitter = await Submitter.findOne({ email });

    let answers = '';
    for (const question in req.body) {
        if (question === "email" || question ==="name") continue;

        answers += req.body[question] ? `${question}: ${req.body[question]}\n\n` : '';
    }

    const prompt = `You're an expert tech domain finder that always uses function calling to select a tech domain based on a user's preferences. 
                    No matter what the user enters, you always pick a domain that's even loosely related. The user is presented a QnA to help
                    decide their domain. Here's the questions along with the user's answers: ${answers}`;
    const result = await chat.sendMessage(prompt);
    const call = result.response.functionCalls()[0];

    if (call) {
        const domain = await functions[call.name](call.args);
        
        if (!submitter) {
            submitter = await Submitter.create({ name, email, domain});
        }
        else {
            submitter.domain = domain;
            submitter.save();
        }
    }
    submitter.domain ? res.json(submitter.domain) : "Error"; 
});
