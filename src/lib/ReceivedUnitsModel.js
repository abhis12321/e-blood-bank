import mongoose from "mongoose";

const receivedUnitsSchema = new mongoose.Schema({
    receiverRoleId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "Invalid request, Try again."],
    },
    receivedUnits:{
        type:Number,
        required:[true , "number of units received is missing."],
    },
    receivedFrom:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "from where or from whom the units were received is missings."]
    },
    prescription:{
        type:String,
        required:[true , "prescription is missing."],
    },
    prescribedBy:{
        type:String,
        required:[true , "who have prescribed ? is missing."],
    },
    hospitalName:{
        type:String,
        required:[true , "Hospital name is missing."],
    },
    paymentId:{
        type:mongoose.Schema.Types.ObjectId,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});


export const ReceivedUnit = mongoose.models.ReceivedUnit || mongoose.model("ReceivedUnit" , receivedUnitsSchema);