const Skill = require('../../models/skill');


module.exports={
  
  addSkill:async (req, res)=>{
    try{
      const skill = new Skill({
        name: req.body.name,
        rating: req.body.rating === null? 0: req.body.rating  ,
        user: req.body.userId
      })
      const result = await skill.save();
      res.json({
        status:{
          message:"skill created successfully",
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