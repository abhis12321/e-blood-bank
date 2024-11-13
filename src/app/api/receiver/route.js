import { DonatedUnit } from "@/lib/DonatedUnitsModel";
import { ReceivedUnit } from "@/lib/ReceivedUnitsModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        let body = await req.json();
        const donation = await DonatedUnit.findOne({ donorId:body.receiverId , status:false });
        if(donation)    return NextResponse.json({ success:false, message:"your already have a donation pending as you want to donate blood and you can not be a donor and a receiver at the same time. So this request is cancelled" });
        const receiving = new ReceivedUnit(body);
        await receiving.save();
        return NextResponse.json({ success:true , message:"Your request for blood-donation is received successfully, we will contact you very soon with the further information related to this request. Thank you."})
    } catch(error) {
        return NextResponse.json({ success:false , message:"your previous request is already pendind and you can not request for a new blood donation while the previous one is pending" })
    }
}