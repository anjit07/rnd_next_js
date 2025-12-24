import { NextResponse } from "next/server";

export async function GET(request:any) {
    
    const header = new Headers(request.headers)
    console.log("header==",header)

    return NextResponse.json({"id":1,"name":"amit"})
}