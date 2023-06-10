const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user_schema');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

const app = express();
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.post('/register',async(req,res)=>{

    const {name,email,phone,work,password,cpassword} = req.body;


    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please filled the fields properly"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User already exist"});

        }
        else if(password !=cpassword){
            return res.status(422).json({error:'Passwords are not matching'});
        }
        else {

        const user = new User({name,email,phone,work,password,cpassword});
        await user.save();          
        res.status(201).json({message:"User registration successfully"});

        }

        

    } catch(err){
        console.log(err);
    }


});


    /* Using promises
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"User already exist"});
        }

        const user = new User({name,email,phone,work,password,cpassword})
        user.save().then(()=>{
            res.status(201).json({message:"User registration successfully"});
        }).catch((err)=>res.status(500).json({err:"failed register"}));

    }).catch(err =>{console.log(err);});





    //console.log(name);
    //console.log(req.body);
    //res.json({message : req.body });
});
*/
// user login here
router.post('/signin',async(req,res)=>{
let token;
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the data"});

        }
      
        const user = await User.findOne({email:email});

        if(user){

            const match = await bcrypt.compare(password,user.password);
        
         token = await user.generateAuthToken();

        console.log(token);
        res.cookie("jwtoken",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly:true
        });
        if(!match){
            res.status(400).json({error : "Invalid credentials"});

        }
        else{

            res.json({message : "user signin successfully"});

        }
        }
        else{
            res.status(400).json({message : "user not present"});

        }
        
        
    } catch(err){
        console.log(err);
    }
    
})

router.get('/about',authenticate,(req,res)=>{
    console.log("Hello I m About page");
      return res.send(req.rootUser);
   });
   router.get('/getdata',authenticate,(req,res)=>{
    console.log("Hello I m contact page");
      return res.send(req.rootUser);
   });

router.post('/contact',authenticate,async(req,res)=>{
try{

    const {name,email,message} = req.body;
    if(!name || !email || !message){
        console.log("error in contact form");
        return res.json({error:"Please fill the ontact form"});
    }
    const userContact = await User.findOne({_id:req.userID});
    if(userContact){
        const userMessage = await userContact.addMessage(name,email,message);
        await userContact.save();
        res.status(201).json({message:"user contact successfull"});
    }

}catch(error){
    console.log(error);
}


});



router.get('/logout',(req,res)=>{
    console.log("Hello I m Logout page");
   res.clearCookie('jwtoken',{path:'/'});
   res.status(200).send('User logout');
   });
  



module.exports = router;