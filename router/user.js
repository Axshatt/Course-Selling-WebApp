const {Router } = require("express");
const { userModal } = require("../db");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") 


const userRoute = Router();

userRoute.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body;
    const hashedPass = await bcrypt.hash(password,10)

    await userModal.create({
        email:email,
        password:hashedPass,
        firstName:firstName,
        lastName:lastName

    })
    res.send({
        msg:"User signup endpoint"
    })
})

userRoute.post("/signin",async function(req,res){
     const email = req.body.email;
        const password = req.body.password;
        const user = await userModal.findOne({
            email:email
        })
    
      
    
       if(user){
         const validUser= bcrypt.compare(password,user.password)
    
           if(validUser){
                const token = jwt.sign({
                     id:user._id
                },process.env.JWT_PASS_USER)
                
                res.send({
                    token:token
                })
                
            }else{
                res.send({
                    msg:"Password didn't matched"
                })
            }
        }else{
            res.send({
                msg:"user not found"
            })
        }
    
})

module.exports ={
    userRoute:userRoute
}