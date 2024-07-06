import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is missing."],
    },
    email: {
        type: String,
        required: [true, "email is missing."],
        unique:[true , "this email is already registered"],
    },
    phoneNo: {
        type: Number,
        required: [true, "phone number is missing."],
        unique:[true , "this modile number is already registered"],
    },
    aadharNo: {
        type: Number,
        required: [true, "Aadhar Number is missing."],
        unique:[true , "your aadhar-number is already registered"],
    },
    bloodGroup: {
        type: String,
        required: [true, "blood-group is missing."],
        enum: {
            values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            message: "Please select correct blood-group"
        }
    },
    age: {
        type: Number,
        required: [true, "user's age is missing."]
    },
    address: {
        type: String,
        required: [true , "address is missing."],
        trim: true
    },
    coordinates: {
        longitude:{
            type:Number,
            required:[true , "Invalid location try again."]
        },
        latitude:{
            type:Number,
            required:[true , "Invalid location try again."]
        },
    },
    accoundVerified: {
        type: Boolean,
        default: false,
    },
    aadharVerified: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.models.User || mongoose.model("User" , userSchema);