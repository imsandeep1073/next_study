import mongoose from "mongoose"
import {User} from "../models/user"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "work_manger"
        })
        console.log("db connected...")
        console.log(connection);

        // testing and create new user

       const uuser =  new User({
            name:"testing user",
            email:"testing@gmail.com",
            password:"12345",
            about:"this is testing"
        })

        await uuser.save();
        console.log('user is created')

    }
    catch (error) {
        console.log('Failed to connect..');
        console.log(error)
    }
}