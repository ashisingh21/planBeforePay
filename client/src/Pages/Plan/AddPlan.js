import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import { comment, trash } from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { useNavigate } from 'react-router-dom'

const AddPlan = () => {

    const navigate = useNavigate()

    var api = 'http://localhost:8080'

    const [plan, setPlan] = useState({ goal: '', month: '', budget: '' })




    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlan({ ...plan, [name]: value })

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(plan)
        const res = await axios.post(`${api}/api/v1/plan/add-plan`, {
            month: plan.month,
            goal: plan.goal,
            budget: plan.budget,

        })
        if (res.data.success) {


            setPlan({ month: '', goal: '', budget: '' })
            Toastify({
                text: `Plan Added Successfully!!!`,
                duration: 1500,

                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },

            }).showToast();

            navigate('/plan')




        }
    }


    const handleUpdateClick = async (id) => {

        alert('ehiwhfohwfho')
    }

    const handleUpdateSubmit = async (id) => {

        const res = await axios.put(`${api}/api/v1/plan/update-plan/${id}`, {
            month: plan.month,
            goal: plan.goal,
            budget: plan.budget,
        })
        if (res.data.success) {


            setPlan({ month: '', goal: '', budget: '' })
            Toastify({
                text: "Plan Updated Successfully!!!",
                duration: 1500,

                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },

            }).showToast();


        }
    }

    useEffect(() => {



    }, [])
    return (
        <InnerLayout>
            <h1>Add Transaction</h1>
            <div className='income-content'>
                <div className='form-container'>
                    <form action="" method="POST" onSubmit={handleSubmit}>

                        <label for="amount">Month:</label><br></br>
                        <input type="month" name="month" onChange={handleChange} value={plan.month} />
                        <br></br>


                        <label for="title">Define your goal:</label><br></br>
                        <input type="text" id="goal" onChange={handleChange} value={plan.goal} name="goal" maxlength="50" required /><br></br>

                        <label for="budget">Budget:</label><br></br>
                        <input type="number" id="budget" onChange={handleChange} value={plan.budget} name="budget" maxlength="20" required /><br></br>



                        {/* <label for="category">Category:</label><br></br>
                        <input type="text" id="category" onChange={handleChange} value={plan.category} name="category" required /><br></br> */}



                        <br></br><br></br>

                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </InnerLayout >

    )
}



export default AddPlan