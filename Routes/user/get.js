const User = require('../../Models/User');

module.exports = {
    getUser: async (req, res)=>{
        try{
            if(req.userData == null || req.userData == undefined){
                return  res.status(401).json(
                    {status:{
                      code:401,
                      message: "Auth Failed"
                    },
                  }
                );
            }
            let response = await User.findOne({_id: req.userData.userId});
            console.log("response", response);
            if(response){
                res.status(200).json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:response,
                });
            }else{
                res.status(200).json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:[],
                });
            }
        }catch(err){
            console.log(err.message);
            res.status(401).json(
                {status:{
                  code:401,
                  message:err.message
                },
              }
            );
        }
    }
}