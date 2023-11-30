const TransactionModel = require('../models/transactionModel');

module.exports.addTransactionController = async (req, res) => {

    try {
        const { title, description, amount, date, category ,type} = req.body;
  

        if (!title || !description || !amount || !category || !type) {
            res.status(406).send('Please fill all fields!')
        }

        if (amount <= 0) {
            res.status(406).send('Amount must be a positive number!')
        }


        const transaction = await new TransactionModel({ title, description, amount,  category, date,type }).save()
        res.status(201).send({ success: true, message: 'Transaction added Successfully!', transaction })
    }

    catch (error) {
         console.error('Error:', error);
    res.status(500).send({ error: 'An error occurred while adding transaction.' });
    }
}



module.exports.updateTransactionController = async (req, res) => {

    try {
        const { title, description, amount, date, category ,type} = req.body;
  

        if (!title || !description || !amount || !category || !type) {
            res.status(406).send('Please fill all fields!')
        }

        if (amount <= 0) {
            res.status(406).send('Amount must be a positive number!')
        }



        const updatedTransaction = {title, description, amount,  category, date,type}
        const transaction = await TransactionModel.findByIdAndUpdate(_id = req.params.id,updatedTransaction,{new:true}).save()
   
        res.status(201).send({ success: true, message: 'Transaction added Successfully!', transaction })
    }

    catch (error) {
         console.error('Error:', error);
    res.status(500).send({ error: 'An error occurred while adding transaction.' });
    }
}


module.exports.getTransactionController = async (req, res) => {

    try {
        const allTransaction = await TransactionModel.find().sort({ createdAt: -1 })
        res.status(200).send({ success: true, message: 'Transaction fetched Successfully!', count: allTransaction.length, allTransaction })
    }

    catch (error) {
        res.status(500).send({ 'error': error })
    }
}

module.exports.deleteTransactionController = async (req, res) => {

    try {
        await TransactionModel.findByIdAndDelete(req.params.id)
        res.status(200).send({ success: true, message: 'Transaction deleted Successfully!' })
    }

    catch (error) {
        res.status(500).send({ 'error': error })
    }
}