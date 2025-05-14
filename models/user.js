import mongoose, { Schema } from "mongoose";


const UserSachema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email Required !!"],
    },
    password: {
        type: String,
        required: [true, "Password Required !!"],
    },
    about: String,
    profileURL: String,
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,
    //     pinCode:Number,
    // }

})

export const User = mongoose.models.users || mongoose.model("users", UserSachema);