import { getResponseMessage } from "@/helper/responsMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


// get all task
export async function GET() {

    try {
        const tasks = await Task.find()
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in Geting Data !!", 404, false);
    }
}




// create all the task
export async function POST(request) {
    const { title, content, userId } = await request.json();
    try {
        const task = new Task({
            title,
            content,
            userId,
        });
        const createdTask = await task.save()
        return NextResponse.json(createdTask, {
            status: 201,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to create Task !!",
            success: false
        })
    }
}