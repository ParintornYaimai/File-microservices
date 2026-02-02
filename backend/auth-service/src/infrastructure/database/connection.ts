import mongoose from "mongoose";

let cachedPromise: Promise<typeof mongoose> | null = null;

export async function connectMongo(){
    const url = process.env.MONGODB_URL as string
    let dbName: string 

    if(url){
        throw new Error("Mongo_URL in Missing in environmente veriables")
    }

    if(mongoose.connection.readyState === 1){
        console.log("Already connected");
        return mongoose
    }

    if(cachedPromise){
        return cachedPromise
    }

    if (!process.env.MONGO_DB_NAME){
        return 
    }

    dbName = process.env.MONGO_DB_NAME

    cachedPromise = mongoose.connect(url,{
        dbName:dbName ,
    }).then((m)=>{
        console.log("[Mongo] connected", mongoose.connection.name);
        return m
    }).catch((err)=>{
        cachedPromise = null
        throw err
    })

    return cachedPromise;
}

export async function disconnectMongo() {
    if(mongoose.connection.readyState != 0){
        await mongoose.disconnect();
        console.log("[Mongo] disconnected")
    }
}