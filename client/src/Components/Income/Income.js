import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import {comment, trash} from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

const Income = () => {
    
    
    var api = 'http://localhost:8080'

    const [income, setIncome] = useState({ title: '', amount: '', category: '', description: '', date: '' })
    const [allIncome, setAllIncome] = useState([])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncome({ ...income, [name]: value })

    }
    

    

    const fetchAllIncomes = async () => {
        const res = await axios.get(`${api}/api/v1/all-income`)
        if (res.data.success) {

            setAllIncome(res.data.allIncome)
        }
    }

     const handleDelete = async (id) => {
        console.log(id)
        const res = await axios.delete(`${api}/api/v1/delete-income/${id}`)
        if (res.data.success) {

             fetchAllIncomes()
              Toastify({    
  text: "Income Deleted Successfully!!!",
  duration: 1500,
 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  
}).showToast();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${api}/api/v1/add-income`,{
           title:income.title,
           description:income.description,
           category:income.category,
           amount:income.amount,
           date:income.date
        })
        if (res.data.success) {
              fetchAllIncomes()
              Toastify({    
  text: "Income Added Successfully!!!",
  duration: 1500,
 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  
}).showToast();
              
        }
    }

    useEffect(() => {
        fetchAllIncomes()

    }, [])
    return (
        <InnerLayout>
            <h1>Incomes</h1>
            <div className='income-content'>
                <div className='form-container'>
                    <form action="" method="POST" onSubmit={handleSubmit}>
                        <label for="title">Title:</label><br></br>
                        <input type="text" id="title" onChange={handleChange} value={income.title} name="title" maxlength="50" required /><br></br><br></br>

                        <label for="amount">Amount:</label><br></br>
                        <input type="number" id="amount" onChange={handleChange} value={income.amount} name="amount" maxlength="20" required /><br></br><br></br>

                        <label for="category">Category:</label><br></br>
                        <input type="text" id="category" onChange={handleChange} value={income.category} name="category" required /><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <textarea id="description" name="description" onChange={handleChange} value={income.description} maxlength="100" required ></textarea><br></br><br></br>

                        <input type="date" name="date" onChange={handleChange} value={income.date} /><br></br><br></br>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className='incomes'>
                    <div className='incomes'>
                        <h2>{allIncome.length}</h2>
                        {allIncome.map((incomeItem, index) => (
                            <div class="transaction-container" key={index}>
                                <p className='title'>{incomeItem.title}</p>
                                <p className='amount'>Rs {incomeItem.amount}</p>
                                <p className='description'>Description: {incomeItem.description}</p>
                                <button onClick={()=> handleDelete(incomeItem._id)}>{trash}</button>
                                 <button onClick={()=> handleUpdate(incomeItem._id)}>{comment}</button>
                                
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </InnerLayout >

    )
}

const IncomeStyled = styled.div`


`

export default Income