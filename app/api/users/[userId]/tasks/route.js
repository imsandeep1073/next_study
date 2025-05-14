
import {Task} from "@/models/task"
import { getResponseMessage } from "@/helper/responsMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = params;

    try {
        const tasks = await Task.find({
            userId:userId
        })

        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error);
        return getResponseMessage("faild to get task !!", 404, false);
    }
}