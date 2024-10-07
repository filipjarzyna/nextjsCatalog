import mongoose, { mongo } from "mongoose";


let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected){
        console.log('already connected to mongodb')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "hiu",
            useNewUrlParser: true,
        })
        console.log("connected to mongodb")
        
        isConnected = true;
        
    } catch(error) {
        console.log(error)
    }

}