import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { InnerLayout } from '../../style/Layout'
import { Link } from 'react-router-dom'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { comment, trash } from '../../utils/Icons'

const Plan = () => {
    var api = 'http://localhost:8080'
    const [plan, setPlan] = useState([])


    const fetchAllPlan = async () => {

        const res = await axios.get(`${api}/api/v1/plan/all-plan`)
        if (res.data.success) {

            setPlan(res.data.plan)
            console.log(plan)
        }
    }


    const handleUpdateClick = async (id) => {

        alert('ehiwhfohwfho')
    }

    const handleDelete = async (id) => {
        console.log(id)
        const res = await axios.delete(`${api}/api/v1/plan/delete-plan/${id}`)
        if (res.data.success) {

            fetchAllPlan()
            Toastify({
                text: "Plan Deleted Successfully!!!",
                duration: 1500,

                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },

            }).showToast();
        }
    }

    useEffect(() => {
        fetchAllPlan()
    }, [])
    return (
        <InnerLayout>
            <h1>Plan for </h1>
            <Link to="./add-plan" className='button'>Add Plan</Link>
            <div className=''>
                {plan.map((plan) => (
                    <table>

                        <tbody>
                            <tr>
                                <td>Month</td>
                                <td>{plan.month}</td>

                            </tr>
                            <tr>
                                <td>Goal</td>
                                <td>{plan.goal}</td>

                            </tr>

                            <tr>
                                <td>Budget</td>
                                <td>&#8377; {plan.budget}</td>

                            </tr>
                            <tr>
                                <td>Actions</td>
                                <td>

                                    <div style={{ display: 'flex' }}>
                                        <button style={{ border: 'none', color: 'var(--color-delete)', paddingLeft: '4px' }} onClick={() => handleDelete(plan._id)}>{trash}</button>

                                        <button style={{ border: 'none', color: 'blue', paddingLeft: '4px' }} onClick={() => handleUpdateClick(plan._id)}>{comment}</button>
                                    </div>

                                </td>

                            </tr>


                        </tbody>
                    </table>
                ))}
            </div>
        </InnerLayout>
    )
}

export default Plan