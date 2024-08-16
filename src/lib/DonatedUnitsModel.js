import mongoose from "mongoose";

const donatedUnitsSchema = new mongoose.Schema({
    donorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "Invalid request, Try again."],
    },
    donatedUnits:{
        type:Number,
        required:[true , "number of units to be donated is missing."],
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    receiverName:{
        type:String,
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
donatedUnitsSchema.index({ donorId: 1 }, { unique: true, partialFilterExpression: { status: false } });
export const DonatedUnit = mongoose.models.DonatedUnit || mongoose.model("DonatedUnit" , donatedUnitsSchema);