import { User } from "@/lib/UserModel";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        let body = await request.json();
        let user = new User(body);
        await user.save();
        return NextResponse.json({ success:true , message:"user registered successfully!" })
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }
}

export async function PUT(request) {
    try {
        let body = await request.json();
        const user = await User.findOne(body);
        return NextResponse.json(user ? { success:true , message:"you logged-in successfully!", user } : { success:false , message:"Invalid credentials" })
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }
}