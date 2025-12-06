import mongoose from "mongoose";


const dataSchema= new mongoose.Schema({
    name: {type:String},
    link: {type: String, required:true}
})

const Data = mongoose.models.User || mongoose.model("User", dataSchema)

export default Data;