'use server';

import { cookies } from "next/headers";

export async function handleLogin(userId:string, accesToken:string, refreshToken:string) {
    const cookieStore = await cookies(); 
    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    });

    cookieStore.set('session_access_token', accesToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 60 minutes
        path: '/',
    });

    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    });
}

export async function resetAuthCookies() {
    const cookieStore = await cookies();
    cookieStore.set('session_userid', '');
    cookieStore.set('session_access_token', '');
    cookieStore.set('session_refresh_token', '');
}

//
// Get data 

export async function getUserId() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('session_serid')?.value
    return userId ? userId : null
}

export async function getAccessToken() {
    let accesToken = (await cookies()).get('session_access_token')?.value;

    return accesToken; 
}