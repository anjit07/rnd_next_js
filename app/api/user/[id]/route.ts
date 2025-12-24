import { NextResponse } from "next/server"

export const GET =async(request:any,context:any)=>{
    console.log("by ID GET context", context)

    console.log("by GET ID", context.params.id)

    return NextResponse.json({"id":2,"name":"Rohit"})
}