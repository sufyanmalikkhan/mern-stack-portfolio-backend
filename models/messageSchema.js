 import mongoose from "mongoose";

 const messageSchema = new mongoose.Schema({
    senderName: {
        type: String,
        minLength: [2, "Name must contain at least 2 charachters!"]
    },
    subject: {
        type: String,
        minLength: [2, "Name must contain at least 2 charachters!"]
    },
    message: {
        type: String,
        minLength: [2, "Name must contain at least 2 charachters!"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
 });

 export const Message = mongoose.model("Message", messageSchema);