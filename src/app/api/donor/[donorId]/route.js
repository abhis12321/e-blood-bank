import { DonatedUnit } from "@/lib/DonatedUnitsModel";
import { NextResponse } from "next/server";


export async function GET(req , {params}) {
    try {
        const donations = await DonatedUnit.find(params);
        return NextResponse.json({ success:true , donations });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }
}