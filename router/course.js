const {Router} = require("express");
const { purchaseModal, courseModal } = require("../db");

const courseRoute = Router();

courseRoute.post("/purchase",async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;
    
    await purchaseModal.create({
        userId,
        courseId
    })

    res.send({
        msg:"Course Purchased"
    })
})

courseRoute.get("/preview",async function(req,res){
    const courses = await courseModal.find({})

    res.json({
        courses
    })
})


module.exports ={
    courseRoute:courseRoute
}