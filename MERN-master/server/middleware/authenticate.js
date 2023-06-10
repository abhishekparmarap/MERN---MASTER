const jwt = require('jsonwebtoken');
const User = require('../model/user_schema');

const Authenticate = async (req,res,next)=>{
    console.log("hi")

    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            if(User){
                console.log(User);
            }
            throw new Error('User not found')
        }
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        next();
    } catch(err){
        res.status(401).send('Unauthorised:no token provided');
        console.log(err);
    }


}

module.exports= Authenticate