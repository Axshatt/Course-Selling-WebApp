const jwt = require("jsonwebtoken")

function userAuth(req,res,next){

    const token = req.body.token;

    const decoded = jwt.verify(token,JWT_PASS_USER)

    if(decoded){    
        req.userId = decoded.id
        next()
 } else{
    res.status(403).json({
        msg:"You are not signed in"
    })
 }




}

module.exports={
    userAuth
}