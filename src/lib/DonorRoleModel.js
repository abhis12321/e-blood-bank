import mongoose from "mongoose";

const donorRoleModel = new mongoose.Schema({
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
    coins:{
        type:Number,
        default:0,
    },
})


export const DonorRole = mongoose.models.DonorRole || mongoose.model("DonorRole" , donorRoleModel);