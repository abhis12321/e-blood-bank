import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentMode:{
        type:String,
        required:[true , "please specify the payment mode"],
        enum:{
            values:["online" , "cash" , "card"],
            message:"please choose a correct payment mode."
        }
    },
    amount:{
        type:Number,
        required:[true , "please specify the payment amount"]
    },
});

export const PayMent = mongoose.models.Payment || mongoose.model("Payment" , paymentSchema);