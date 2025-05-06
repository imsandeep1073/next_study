import mongoose from "mongoose"

export const connectDb = async () => {
    try {
       const {connection} = await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName:"work_manger"
        })
        console.log("db connected...")
        console.log(connection);
    }
    catch (error) {
        console.log('Failed to connect..');
        console.log(error)
    }
}