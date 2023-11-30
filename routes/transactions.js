const { addTransactionController, getTransactionController, deleteTransactionController, updateTransactionController } = require('../controllers/TransactionController')

const router = require('express').Router()

// incomes
router.post('/add-transaction', addTransactionController)

router.get('/all-transaction', getTransactionController)

router.delete('/delete-transaction/:id', deleteTransactionController)

router.put('/update-transaction/:id', updateTransactionController)

// // expanse
// router.post('/add-expanse', addExpanseController)

// router.get('/all-expanse', getExpanseController)

// router.delete('/delete-expanse/:id', deleteExpanseController)


module.exports = router