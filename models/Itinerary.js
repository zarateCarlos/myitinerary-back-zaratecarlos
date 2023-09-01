import {  model, Schema, Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type:String,required:true },
    price: { type:Number,required:true },
    duration: { type:Number },
    photo: { type:String,required:true },
    tags: { type:[String]  },
    city_id:{ type:Types.ObjectId,required:true,ref:'cities' }

})

let Itinerary = model(collection,schema)

export default Itinerary