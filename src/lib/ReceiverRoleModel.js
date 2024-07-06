import mongoose from "mongoose";

const receiverRoleSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "userId is missing"],
        unique:[true , "this user-id is already in use."]
    },
    completedUnits:{
        type:[mongoose.Schema.Types.ObjectId],
    },
    pendingUnits:{
        type:[mongoose.Schema.Types.ObjectId],
    },
})


export const ReceiverRole = mongoose.models.ReceiverRole || mongoose.model("ReceiverRole" , receiverRoleSchema);