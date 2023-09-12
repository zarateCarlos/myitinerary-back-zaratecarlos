import { model,Schema } from "mongoose";

let collection = 'users'

let schema = new Schema({
    name: { type:String,require:true },
    lastname: { type:String },
    mail: { type:String,require:true,unique:true },
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",sparse: true },
    password: { type:String,require:true },
    country: { type:String,require:true }
})

let User = model(collection,schema)
export default User