const IncomeModel = require('../models/IncomeModel');

module.exports.addIncomeController = async (req, res) => {

    try {
        const { title, description, amount, date, category } = req.body;
  

        if (!title || !description || !amount || !category) {
            res.status(406).send('Please fill all fields!')
        }

        if (amount <= 0) {
            res.status(406).send('Amount must be a positive number!')
        }


        const income = await new IncomeModel({ title, description, amount,  category, date }).save()
        res.status(201).send({ success: true, message: 'Income added Successfully!', income })
    }

    catch (error) {
         console.error('Error:', error);
    res.status(500).send({ error: 'An error occurred while adding income.' });
    }
}


module.exports.getIncomeController = async (req, res) => {

    try {
        const allIncome = await IncomeModel.find().sort({ createdAt: -1 })
        res.status(200).send({ success: true, message: 'Income fetched Successfully!', count: allIncome.length, allIncome })
    }

    catch (error) {
        res.status(500).send({ error: error })
    }
}

module.exports.deleteIncomeController = async (req, res) => {

    try {
        await IncomeModel.findByIdAndDelete(req.params.id)
        res.status(200).send({ success: true, message: 'Income deleted Successfully!' })
    }

    catch (error) {
        res.status(500).send({ error: error })
    }
}