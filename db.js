const mongoose = require("mongoose")
require("dotenv").config();

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(process.env.DATABASE_URL)

const user= new Schema({
    
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName :String
})

const admin= new Schema({
   
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName :String
})

const course = new Schema({
    _id:ObjectId,
    title:String,
    description:String,
    price:Number,
    imageUrl :String,
    creatorId:ObjectId
})


const purchases= new Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const adminModal = mongoose.model("admins",admin)
const userModal = mongoose.model("users",user)
const courseModal = mongoose.model("courses",course)
const purchaseModal= mongoose.model("purchases",purchases)

module.exports={
    adminModal,
    userModal,
    courseModal,
    purchaseModal
}