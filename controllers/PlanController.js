const PlanModel = require("../models/PlanModel");

module.exports.addPlanController = async (req,res)=>{
    try {
    const {goal,month,budget,categories}= req.body;
    const plan = await new PlanModel({goal,month,budget,categories}).save();
     res.status(201).send({success:true,message:'Wooohhoooooo!!!! Plan saved successfully!',plan})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}