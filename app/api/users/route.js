import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb();

export function GET(request) {
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: 2,
            name: "Man Doe",
            email: "mandoe@gmail.com"
        }
    ]

    return NextResponse.json(users);
}

export function DELETE(request) {
    console.log("Delete api called");
    return NextResponse.json({
        massage: "user deleted successfully",
        status: true
    }, {
        status: 200,
        statusText: "hey change text"
    })
}

export function POST(request) {
    const body = request.body
    console.log(body)
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname)


    return NextResponse.json({
        massage: 'posting user data'
    })
}