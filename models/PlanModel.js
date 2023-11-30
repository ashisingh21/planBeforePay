const mongoose = require('mongoose')


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
category:{
    type: Schema.Types.ObjectId,
    ref: 'Category'
},
})

module.exports =  mongoose.model('plan',PlanModel)