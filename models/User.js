import { Type, TypeIcon } from "lucide-react";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String},
    username: { type: String, required: true },
    provider: { type: String, required: true },
    profilepic: {type: String},
    coverpic: {type: String},
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    });

    const User = mongoose.models?.User || model('User', userSchema);
export default User;