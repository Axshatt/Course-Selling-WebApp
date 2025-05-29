const {Router } = require("express")

const userRouter = Router();

userRouter.post("/signup",function(req,res){
    res.send({
        msg:"signup endpoint"
    })
})

userRouter.post("/signin",function(req,res){
    res.send({
        msg:"signin endpoint"
    })
})

module.exports ={
    userRouter:userRouter
}