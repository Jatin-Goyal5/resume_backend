const User = require('../../Models/User');
const {jwt_salt} = require('../../env/env')

module.exports={
    updateUser:async (req, res, next)=>{
        let updateObj ={};
        for(let i in req.body){
            if(req.body[i].length)
            updateObj[i] = req.body[i];
        }

        updateObj= {
            ...updateObj,
            _id: req.userData.userId
        }
        console.log(updateObj);
        const user = new User(updateObj);
        console.log(user);
        
        let response = await User.updateOne({_id: req.userData.userId}, user);
        if(response){
            // console.log(user);
            res.status(201).json({
              status:{
                code:201,
                message:"successful",
              },
              data:response
            })
          }else{
            res.status(203).json({
              status:{
                code:203,
                message:"unable to data",
              }
    
            })
          }
    }
}