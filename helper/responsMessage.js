import { NextResponse } from "next/server"

export const getResponseMessage=(messageCode,successCode,sendStatusCode)=>{
    return NextResponse.json({
        message:messageCode,
        success:successCode,
    },{
        status:sendStatusCode,
    })
}