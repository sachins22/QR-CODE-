import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/QR-code');


const urlSchema = new mongoose.Schema({
    url:{
        type:String,
        // required:true
    }
},{
    timestamps:true
})

export const Url = mongoose.model("Url",urlSchema)

