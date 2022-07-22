const Project = require('../../models/project');


module.exports={
  
  addProject: async (req, res)=>{
    try{
      const project = new Project({
        title: req.body.title,
        description : req.body.description ,
        user: req.userData.userId,
        skills: req.body.skills,
      })
      const result = await project.save();
      res.status(201).json({
        status:{
          message:"project created successfully",
          code:201
        },
        data: result
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