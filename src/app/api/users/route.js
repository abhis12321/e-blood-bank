import { User } from "@/lib/UserModel";
import { E_BLOOD_BANK_TOCKEN, TOCKEN_MAX_AGE } from "@/serverUtilities/utilContaints";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const tocken = cookies().get(E_BLOOD_BANK_TOCKEN)?.value;

        const { _id } = verify(tocken , process.env.JWT_SECRET_KEY);
        if(!_id) return NextResponse.json({ } , { status:404 });

        let user = (await User.findOne({ _id })).toObject();
        if(!user) return NextResponse.json({ } , { status:404 });

        delete user.password;
        return NextResponse.json({ user });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message }, { status:404 });
    }
}

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
        const user = (await User.findOne(body)).toObject();
        delete user?.password;
        const tocken = sign(user , process.env.JWT_SECRET_KEY, { expiresIn: TOCKEN_MAX_AGE })

        cookies().set({
            name:E_BLOOD_BANK_TOCKEN,
            value:tocken,
            secure: process.env.NODE_ENV === 'production' && window?.location?.protocol === 'https:',
            httpOnly:true,
            sameSite:"strict",
            maxAge:TOCKEN_MAX_AGE,
            path:"/"
        });

        delete user.password;
        return NextResponse.json({ message:"you logged-in successfully!", user } , { status:user ? 200 : 404 })
    } catch(error) {
        return NextResponse.json({ success:false , message:`Wrong credentials! ${error.message}` });
    }
}


export async function DELETE() {
    try {
        cookies().delete(E_BLOOD_BANK_TOCKEN);
        return NextResponse.json({ message:"logged out.." });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message }, { status:404 });
    }
}
