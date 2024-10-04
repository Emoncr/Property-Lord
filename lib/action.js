'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET_KEY = '5497214da43a9f4b576e5159988d7096486ec595';

const key = new TextEncoder().encode(JWT_SECRET_KEY);
export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 days')
        .sign(key);
}

export async function getToken() {
    return cookies().get('auth_token')?.value;
}

export async function create_token(data) {
    const session = await encrypt(data);
    const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10days
    cookies().set('auth_token', session, { expires, httpOnly: true });
}
export async function delete_token(session) {
    cookies().set('auth_token', session, {
        expires: new Date(0),
        httpOnly: true,
    });
}

export const decodedToken = async () => {
    const token = await getToken();
    if (!token) return null;
    const secret = new TextEncoder().encode(JWT_SECRET_KEY);
    const payload = await jwtVerify(token, secret);
    return payload['payload'];
};
