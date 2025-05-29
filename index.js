const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const {Router} = require("express");
const { courseRoute } = require("./router/course");
const { userRouter } = require("./router/user");
const { adminRoute } = require("./router/admin");

const app = express();
app.use("/api/v1/user",userRouter)
app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/course",courseRoute)


app.listen(3000)

