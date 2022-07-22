const Project = require('../../models/project')

module.exports = {
    getProjects: async (req, res)=>{
        try{
            let project = await Project.find({user:req.userData.userId});
            if(project.length){
                res.status(200).json({
                    status:{
                      message:"successful",
                      code :200,
                    },
                    data:project,
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