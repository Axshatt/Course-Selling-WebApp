const { Router, application } = require("express")
const { adminModal, courseModal } = require("../db");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { adminAuth } = require("../middleware/admin");
const adminRoute = Router();
adminRoute.post("/signup", async function (req, res) {

    const { email, password, firstName, lastName } = req.body;
    const hashedPass = await bcrypt.hash(password, 10)

    await adminModal.create({
        email: email,
        password: hashedPass,
        firstName: firstName,
        lastName: lastName

    })
    res.send({
        msg: "Admin signup endpoint"
    })
})
adminRoute.post("/signin", async function (req, res) {

    const email = req.body.email;
    const password = req.body.password;
    const admin = await adminModal.findOne({
        email: email
    })

    const validAdmin = bcrypt.compare(password, admin.password)

    if (admin) {
        const validAdmin = bcrypt.compare(password, user.password)

        if (validAdmin) {
            const token = jwt.sign({
               id:admin._id
            }, process.env.JWT_PASS_ADMIN)

            res.send({
                token: token
            })

        } else {
            res.send({
                msg: "Password didn't matched"
            })
        }
    } else {
        res.send({
            msg: "Admin not found"
        })
    }

})
adminRoute.post("/courses",adminAuth,async function (req, res) {
    const adminId = req.userId;

    const {title,description,imageUrl,price} = req.body;

    const course = await courseModal.create({

        title,
        description,
        imageUrl,
        price,
        creatorId:adminId,

    })

    res.send({
        courseId:course._id,
        msg:"Course Created"
    })
})

adminRoute.put("/course",async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price,courseId }= req.body;

    const course = await courseModal.updateOne({
        creatorId:adminId,
        courseId:courseId
    },{

         title,
        description,
        imageUrl,
        price,

    })

    res.send({
        msg:"course updated",
        courseId: course._id
    })
})

adminRoute.get("/course/bulk" ,async function (req,res){
    const adminId = req.userId;

    const courses = await courseModal.find({
        creatorId :adminId
    })

    res.send({
        courses
    })


})


module.exports = {
    adminRoute: adminRoute
}