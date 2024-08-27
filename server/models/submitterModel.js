import mongoose from "mongoose";

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
    domain: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model("Submitter", submitterSchema);