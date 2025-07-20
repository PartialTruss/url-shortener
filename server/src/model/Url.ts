import mongoose from "mongoose";

export const urlModel = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true
        },
        shortCode: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true
    }
)

export const Url = mongoose.model("Url", urlModel)