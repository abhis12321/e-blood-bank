import { ReceivedUnit } from "@/lib/ReceivedUnitsModel";
import { NextResponse } from "next/server";


export async function GET(req , {params}) {
    try {
        const receivers = await ReceivedUnit.find(params);
        return NextResponse.json({ success:true, message:"found!", receivers })
    } catch(error) {
        return NextResponse.json({ success:false, message:error.message })
    }
}