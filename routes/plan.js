const { addPlanCategoryController, AllPlanCategoryController, UpdatePlanCategoryController, deletePlanCategoryController } = require('../controllers/PlanCategoryController')
const { addPlanController } = require('../controllers/PlanController')

const router = require('express').Router()

router.post('/add-plan', addPlanController)


// category

router.post('/add-category', addPlanCategoryController)

router.put('/update-category', UpdatePlanCategoryController)

router.get('/all-category', AllPlanCategoryController)


router.delete('/delete-category', deletePlanCategoryController)


module.exports = router