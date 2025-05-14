import { getResponseMessage } from "@/helper/responsMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { taskId } = params;

    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in Getting Task !!", 404, false);
    }

}

// update single task

export async function PUT(request, { params }) {
    try {
        const { taskId } = params;
        const { title, content, status } = await request.json();
        let task = await Task.findById(taskId);
        task.title = title,
            task.content = content,
            task.status = status;
        const updateTask = await task.save();
        return NextResponse.json(updateTask)
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in Updating Task !!", 500, false);
    }
}


// Delete Single user
// export async function DELETE(request, { params }) {

//     const { userId } = params;
//     try {
//         await User.deleteOne({
//             _id: userId,
//         })
//         return NextResponse.json({
//             massage: "user deleted successfully",
//             status: true
//         })


//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({
//             massage: "failed to delete user !!",
//             status: false,
//         })
//     }
// }

// Delter single task
export async function DELETE(request, { params }) {
    const { taskId } = params;
    try {
       const deletetsk = await Task.deleteOne({
            _id: taskId,
        })
        // const updateTask = await task.save();
        return NextResponse.json(deletetsk)
        // return getResponseMessage("Deleted task !!", 200, true)

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to Deleted task !!", 500, false)

    }


}


