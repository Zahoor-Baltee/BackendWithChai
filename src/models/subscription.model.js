import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //One who is Subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //One to  whom subscriber  is Subscribing
        ref: "User"
    },
}, { timestamps: true })


export const Subscription = mongoose.model("Subscription", subscriptionSchema)