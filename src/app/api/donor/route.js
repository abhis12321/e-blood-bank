import { DonatedUnit } from "@/lib/DonatedUnitsModel";
import { ReceivedUnit } from "@/lib/ReceivedUnitsModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();
        const receivings = await ReceivedUnit.find({ receiverId:body.donorId });
        if(receivings)   return NextResponse.json({ success:false, message:"your have a receiving pending as you want to receive blood and you can not be a donor and a receiver at the same time." });
        const donorRequest = new DonatedUnit(body);
        await donorRequest.save();
        return NextResponse.json({ success:true , message:"Your blood-donation application is received successfully, we will contact you very soon with the further information related to this request. Thank you." })
    } catch(error) {
        return NextResponse.json({ success:false , message:"your previous donation is already pendind So you can not place a new blood donation while the another is pending" });
    }
}