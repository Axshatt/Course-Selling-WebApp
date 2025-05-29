const {Router} = require("express")

const adminRoute = Router();
adminRoute.post("/signup",function(req,res){
    res.send({
        msg:"Admin signup endpoint"
    })
})
adminRoute.post("/signin",function(req,res){
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