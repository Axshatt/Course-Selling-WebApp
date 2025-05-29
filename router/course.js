const {Router} = require("express")

const courseRoute = Router();

courseRoute.get("/all",function(req,res){
    res.send({
        msg:"course endpoint"
    })
})

courseRoute.get("/purchases",function(req,res){
    res.send({
        msg:"purchased course endpoint"
    })
})

courseRoute.post("/purchase",function(req,res){
    res.send({
        msg:"purchase course endpoint"
    })
})

module.exports ={
    courseRoute:courseRoute
}