const Skill = require('../../models/skill')

module.exports = {
    getSkills: async (req, res)=>{
        try{
            let skill = await Skill.findById({user: req.params.id});
            if(skill.length){
                res.json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:skill,
                });
            }else{
                res.json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:[],
                });
            }
        }catch(err){
            console.log(err.message);
            res.json(
                {status:{
                  code:401,
                  message:err.message
                },
              }
            );
        }
    }
}