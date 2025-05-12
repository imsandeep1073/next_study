import { User } from '@/models/user';
import { NextResponse } from 'next/server';

// export function DELETE(request,{params}) {
//     console.log("Delete api called",params.userId);
//     return  NextResponse.json({
//         massage: "testing deleted"
//     })
// }



// Get Single User 
export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const user = await User.findById(userId);
        return NextResponse.json(user);

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            massage: "User Not Found !!",
            status: false
        })

    }

}


// Update Single user

export async function PUT(request, { params }) {
    const { userId } = params

    const { name, password, about, profileURL } = await request.json();

    try {
        const user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;
        const updateUser = await user.save();
        return NextResponse.json(updateUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            massage:"failed to update user !!",
            success:false,
        });
    };

};


// Delete Single user
export async function DELETE(request, { params }) {

    const { userId } = params;
    try {
        await User.deleteOne({
            _id: userId,
        })
        return NextResponse.json({
            massage: "user deleted successfully",
            status: true
        })


    } catch (error) {
        console.log(error);
        return NextResponse.json({
            massage: "failed to delete user !!",
            status: false,
        })
    }
}