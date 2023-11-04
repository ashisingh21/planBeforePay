const { addExpanseController, getExpanseController, deleteExpanseController } = require('../controllers/ExpanseController')
const { addIncomeController, getIncomeController, deleteIncomeController } = require('../controllers/IncomeController')

const router = require('express').Router()

// incomes
router.post('/add-income', addIncomeController)

router.get('/all-income', getIncomeController)

router.delete('/delete-income/:id', deleteIncomeController)

// expanse
router.post('/add-expanse', addExpanseController)

router.get('/all-expanse', getExpanseController)

router.delete('/delete-expanse/:id', deleteExpanseController)

module.exports = router