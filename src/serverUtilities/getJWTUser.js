import { verify } from "jsonwebtoken";
import { cookies } from "next/headers"
import { E_BLOOD_BANK_TOCKEN } from "./utilContaints";

export const getJWTUser = () => {
    try {
        const tocken = cookies().get(E_BLOOD_BANK_TOCKEN)?.value;
        const user = verify(tocken , process.env.JWT_SECRET_KEY);
        return user;
    } catch(error) {
        return null;
    }
}