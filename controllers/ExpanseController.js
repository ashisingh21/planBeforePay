const expanseModel = require('../models/ExpanseModel');

module.exports.addExpanseController = async (req, res) => {

    try {
        const { title, description, amount, type, category } = req.body;
        const date = req.body.date || new Date();

        if (!title || !description || !amount || !category) {
            res.status(406).send('Please fill all fields!')
        }

        if (amount <= 0) {
            res.status(406).send('Amount must be a positive number!')
        }


        const expanse = await new expanseModel({ title, description, amount, type, category, date }).save()
        res.status(201).send({ success: true, message: 'Expanse added Successfully!', expanse })
    }

    catch (error) {
        res.status(500).send({ error: error })
    }
}


module.exports.getExpanseController = async (req, res) => {

    try {
        const allExpanse = await expanseModel.find().sort({ createdAt: -1 })
        res.status(200).send({ success: true, message: 'Expanse fetched Successfully!', count: allExpanse.length, allExpanse })
    }

    catch (error) {
        res.status(500).send({ error: error })
    }
}

module.exports.deleteExpanseController = async (req, res) => {

    try {
        await expanseModel.findByIdAndDelete(req.params.id)
        res.status(200).send({ success: true, message: 'Expanse deleted Successfully!' })
    }

    catch (error) {
        res.status(500).send({ error: error })
    }
}