import mongoose from "mongoose";

const donatedUnitsSchema = new mongoose.Schema({
    donorRoleId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "Invalid request, Try again."],
    },
    donatedUnits:{
        type:Number,
        required:[true , "number of units to be donated is missing."],
    },
    donatedTo:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "where or to whom the units were donated is missings."]
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

export const donatedUnit = mongoose.models.DonatedUnit || mongoose.model("DonatedUnit" , donatedUnitsSchema);