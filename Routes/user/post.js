const User = require('../../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../../env/env')

module.exports={
  login:async (req, res)=>{
    try{
      const user = await User.findOne({email:req.body.email});
      if(user){
        const isValid =await bcrypt.compare(req.body.password,user.password);
        if(isValid){
          const token = jwt.sign({email:user.email,userId:user._id},env.jwt_salt,{expiresIn:"1h"})
            return res.json({
              status:{
                message:"login successful",
                code:200
              },
              data:{
                token:token,
                expiresIn:3600,
                userId :user._id
              }
            })
        }else{
          return res.status(401).json({
            status:{
              message:"Auth Failed",
              code:401
            }
          })
        }
      }else{
        return res.status(401).json({
          status:{
            message:"user not present",
            code:401
          }
        })
    }
    }catch(e){
      console.log(e.message);
      return res.status(500).json({
        status:{
          error:e,
          message:e.message,
          code:500
        }
      })
    }

  },
  signup:async (req, res, next)=>{
    try{
      const hash = await bcrypt.hash(req.body.password,10);
      const user = new User({
        email: req.body.email,
        password: hash,
      })
      const result = await user.save();
      console.log(result);
      const token = jwt.sign({email:result.email,userId:result._id},env.jwt_salt,{expiresIn:"1h"})
      return res.json({
        status:{
          message:"signup successful",
          code:200
        },
        data:{
          token:token,
          expiresIn:3600,
          userId :result._id
        }
      })
      

    }catch(e){
      console.log(e.message);
      res.status(500).json({
        status:{
          error:e,
          message:e.message,
          code:500
        }
      })

    }

  }
}