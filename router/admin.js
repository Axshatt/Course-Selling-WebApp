const {Router} = require("express")

const {adminModal } = require("../db");
const { default: mongoose } = require("mongoose");

const adminRoute = Router();
adminRoute.post("/signup",async function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const firstName= req.body.firstName;
    const lastName= req.body.lastName;

    await adminModal.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName

    })
    res.send({
        msg:"Admin signup endpoint"
    })
})
adminRoute.post("/signin",async function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const user = await mongoose.findOne({
        email:email
    })
    if(user){
        jwt.sign({
            email:email
        },process.env.JWT_PASS)

        res.send({
            token:token
        })

    }else{
        res.send({
            msg:"user not found"
        })
    }

    res.send({
        msg:"Admin signin endpoint"
    })
})
adminRoute.get("/courses",function(req,res){
    res.send({
        msg:"Admin courses endpoint"
    })
})

module.exports={
    adminRoute:adminRoute
}