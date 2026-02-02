import { connectMongo } from './infrastructure/database/connection.js'
import { MongoUserRepository } from "./infrastructure/database/MongoUserRepository.js";

import { LoginUser } from "./application/use-cases/LoginUser.js";
import { RegisterUser } from "./application/use-cases/RegisterUser.js";


let inited = false;
const userRepo = new MongoUserRepository();

export async function initContainer(){ 
    if(inited) return 
    await connectMongo();
    inited = true
}

export function buildRegisterUser(){
    if(!inited) throw new Error("Call initContainer() first") 
    return new RegisterUser({userRepo})
}

export function buildLoginUser(){
    if(!inited) throw new Error("Call initContainer() first")   
    return new LoginUser({userRepo})
}