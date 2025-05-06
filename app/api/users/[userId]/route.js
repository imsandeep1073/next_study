import { NextResponse } from 'next/server';

export function DELETE(request,{params}) {
    console.log("Delete api called",params.userId);
    return  NextResponse.json({
        massage: "testing deleted"
    })
}