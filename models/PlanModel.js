const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanModel = new mongoose.Schema({
goal:{
    type:String,
    required:true
},
month:{
    type:String,
    required:true
},
budget:{
    type:Number,
    required:true
},
categories:[{
    type: Schema.Types.ObjectId,
    ref: 'Category'
}],
})

module.exports =  mongoose.model('plan',PlanModel)