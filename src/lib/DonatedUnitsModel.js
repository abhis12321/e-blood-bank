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
    },
    status:{
        type:Boolean,
        default:false,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

export const DonatedUnit = mongoose.models.DonatedUnit || mongoose.model("DonatedUnit" , donatedUnitsSchema);