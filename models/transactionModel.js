const mongoose = require('mongoose')


const transactionModel = new mongoose.Schema({

    title:{
        type:String,
        required:true,

    },
     description:{
        type:String,
        required:true,

    },
     amount:{
        type:Number,
        required:true,

    },
     date:{
        type:Date,
        default:Date.now()

    },
     type:{
        type:String,
        required:true,

    },
     category:{
        type:String,
        required:true,

    },
 
}, { timestamps: true })

module.exports =  mongoose.model('transaction',transactionModel)
