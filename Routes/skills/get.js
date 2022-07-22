const Skill = require('../../models/skill')

module.exports = {
    getSkills: async (req, res)=>{
        try{
            if(!req.userData.userId){
                return  res.status(401).json(
                    {status:{
                      code:401,
                      message:"user Id is not present"
                    },
                  }
                );
            }
            let skill = await Skill.find({user: req.userData.userId});
            if(skill.length){
              res.status(200).json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:skill,
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