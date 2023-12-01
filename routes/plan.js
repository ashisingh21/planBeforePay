const { addPlanCategoryController, AllPlanCategoryController, UpdatePlanCategoryController, deletePlanCategoryController } = require('../controllers/PlanCategoryController')
const { addPlanController ,UpdatePlanController,AllPlanController,DeletePlanController} = require('../controllers/PlanController')

const router = require('express').Router()


// plans

router.post('/add-plan', addPlanController)

router.put('/update-plan/:id', UpdatePlanController)

router.get('/all-plan', AllPlanController)

router.delete('/delete-plan/:id', DeletePlanController)


// category

router.post('/add-category', addPlanCategoryController)

router.put('/update-category/:id', UpdatePlanCategoryController)

router.get('/all-category', AllPlanCategoryController)

router.delete('/delete-category/:id', deletePlanCategoryController)


module.exports = router