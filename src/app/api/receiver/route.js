import { ReceivedUnit } from "@/lib/ReceivedUnitsModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        let body = await req.json();
        const receiving = new ReceivedUnit(body);
        await receiving.save();
        return NextResponse.json({ success:true , message:"Your request for blood-donation is received successfully, we will contact you very soon with the further information related to this request. Thank you."})
    } catch(error) {
        console.log(error.message);
        
        return NextResponse.json({ success:false , message:"your previous request is already pendind and you can not request for a new blood donation while the another is pending" })
    }
}