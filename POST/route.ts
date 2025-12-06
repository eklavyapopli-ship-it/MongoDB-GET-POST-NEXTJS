import ConnectToDatabase from "@/lib/dbConnect";
import Data from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request:Request) {
    try {
      try {
              await mongoose.connect(process.env.MongoURL!)
              console.log("connected to db")
          } catch (error) {
              console.log(error)
          }
      
      
        const {name,link}= await request.json()
        const newData = new Data({name,link})
        await newData.save()
        return NextResponse.json(newData,{status:201})
    } catch (error) {
        
    }
    
}