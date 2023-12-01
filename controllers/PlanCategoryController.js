const CategoryModel = require("../models/CategoryModel");

module.exports.addPlanCategoryController = async (req,res)=>{
 try {
    const {name,amount}= req.body;
    const category = await new CategoryModel({name,amount}).save();
     res.status(201).send({success:true,message:'Category saved successfully!',category})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}


module.exports.UpdatePlanCategoryController = async (req,res)=>{
 try {
    const {name,amount}= req.body;
    const updatedCategory = {name,amount}
    const category = await CategoryModel.findByIdAndUpdate(req.params.id,updatedCategory,{new:true})
     res.status(200).send({success:true,message:'Category updated successfully!',category})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.AllPlanCategoryController = async (req,res)=>{
 try {

    const allCategory = await CategoryModel.find({});
      res.status(200).send({success:true,message:'Category fetched successfully!',allCategory})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}


module.exports.deletePlanCategoryController = async (req,res)=>{
 try {
    const {id}= req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
     res.status(200).send({success:true,message:'Category deleted successfully!',category})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}