const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const mongoose = require("mongoose")
const {Router} = require("express");
const { courseRoute } = require("./router/course");
const { userRoute } = require("./router/user");
const { adminRoute } = require("./router/admin");
const app = express();
app.use(express.json())
app.use("/api/v1/user",userRoute)
app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/course",courseRoute)


async function main(){
   await mongoose.connect(process.env.DATABASE_URL)
    app.listen(3000)
}

main();
