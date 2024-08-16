import mongoose from "mongoose";

const receivedUnitsSchema = new mongoose.Schema({
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "Invalid request, Try again."],
    },
    receivedUnits:{
        type:Number,
        required:[true , "number of units received is missing."],
    },
    prescription:{
        type:String,
        required:[true , "prescription is missing."],
    },
    prescribedBy:{
        type:String,
        required:[true , "who have prescribed (ie. Doctor name)? is missing."],
    },
    hospitalName:{
        type:String,
        required:[true , "Hospital name is missing."],
    },
    donorId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    paymentId:{
        default:0,
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
receivedUnitsSchema.index({ receiverId: 1 }, { unique: true, partialFilterExpression: { status: false } });
export const ReceivedUnit = mongoose.models.ReceivedUnit || mongoose.model("ReceivedUnit" , receivedUnitsSchema);