import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
connectDb();



// how to create complet user API  POST, GET, DELETE, PUT METHOD USE

// Create user api
export async function POST(request) {
    // fatch user details using api
    const { name, email, password, about, profileURL } = await request.json()

    const user = new User({
        name, email, password, about, profileURL
    })

    try {
        const createdUser = await user.save()
        const resopnse = NextResponse.json(user, {
            status: 201,
        })
        return resopnse;
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            massage: "failed to create user !!",
            status: false,
        })
    }
}

// export function GET(request) {
//     const users = [
//         {
//             id: 1,
//             name: "John Doe",
//             email: "johndoe@gmail.com"
//         },
//         {
//             id: 2,
//             name: "Man Doe",
//             email: "mandoe@gmail.com"
//         }
//     ]
//     return NextResponse.json(users);
// }


export async function GET(request) {
    let users = [];
    try {
        users = await User.find().select("-password"); //.select("-password"); this use to hide password in db or other quary
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            massage: "failed to fetch user !!",
            status: false,
        })
    }

    return NextResponse.json(users)
}

// export function DELETE(request) {
//     console.log("Delete api called");
//     return NextResponse.json({
//         massage: "user deleted successfully",
//         status: true
//     }, {
//         status: 200,
//         statusText: "hey change text"
//     })
// }




// export function POST(request) {
//     const body = request.body
//     console.log(body)
//     // console.log(request.method);
//     // console.log(request.cookies);
//     // console.log(request.headers);
//     // console.log(request.nextUrl.pathname)


//     return NextResponse.json({
//         massage: 'posting user data'
//     })
// }