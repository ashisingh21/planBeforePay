const PlanModel = require("../models/PlanModel");

module.exports.addPlanController = async (req,res)=>{
    try {
    const {goal,month,budget,categories} = req.body;
    const plan = await new PlanModel({goal,month,budget,categories}).save();
     res.status(201).send({success:true,message:'Wooohhoooooo!!!! Plan saved successfully!',plan})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.UpdatePlanController = async (req,res)=>{
    try {
    const {goal,month,budget,categories} = req.body;
    const updatedPlan = {goal,month,budget,categories}
    const plan = await PlanModel.findByIdAndUpdate(req.params.id,updatedPlan,{new:true})
     res.status(201).send({success:true,message:'Wooohhoooooo!!!! Plan updated successfully!',plan})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.AllPlanController = async (req,res)=>{
    try {
    const plan = await PlanModel.find({})
     res.status(201).send({success:true,message:'Wooohhoooooo!!!! Plan fetched successfully!',plan})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.DeletePlanController = async (req,res)=>{
    try {
        const {id}= req.params;
    const plan = await PlanModel.findByIdAndDelete(id)
     res.status(201).send({success:true,message:'Wooohhoooooo!!!! Plan deleted successfully!',plan})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}