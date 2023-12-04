import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import { comment, trash } from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from './TransactionItem'
import { useNavigate } from 'react-router-dom'
import { useTransaction } from '../../context/AllTransaction'

const Income = () => {

    const navigate = useNavigate()

    var api = 'http://localhost:8080'

    const [transaction, setTransaction] = useState({ title: '', amount: '', category: '', type: '', description: '', date: '' })
    const { fetchAllTransaction } = useTransaction()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(transaction)
        const res = await axios.post(`${api}/api/v1/add-transaction`, {
            title: transaction.title,
            description: transaction.description,
            category: transaction.category,
            type: transaction.type,
            amount: transaction.amount,
            date: transaction.date
        })
        if (res.data.success) {
            fetchAllTransaction()

            setTransaction({ title: '', amount: '', category: '', type: '', description: '', date: '' })
            Toastify({
                text: `${transaction.type} Added Successfully!!!`,
                duration: 1500,

                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },

            }).showToast();

            navigate('/transaction')




        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value })

    }


    useEffect(() => {
        fetchAllTransaction()

    }, [])


    return (
        <InnerLayout>
            <h1>Add Transaction</h1>
            <div className='income-content'>
                <div className='form-container'>
                    <form action="" method="POST" onSubmit={handleSubmit}>
                        <label for="title">Title:</label><br></br>
                        <input type="text" id="title" onChange={handleChange} value={transaction.title} name="title" maxlength="50" required /><br></br>

                        <label for="amount">Amount:</label><br></br>
                        <input type="number" id="amount" onChange={handleChange} value={transaction.amount} name="amount" maxlength="20" required /><br></br>

                        <label for="type">Type:</label><br></br>
                        <select id="type" onChange={handleChange} value={transaction.type} name="type" required>
                            <option>Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expanse</option>
                        </select><br></br>

                        <label for="category">Category:</label><br></br>
                        <input type="text" id="category" onChange={handleChange} value={transaction.category} name="category" required /><br></br>

                        <label for="description">Description:</label><br></br>
                        <textarea id="description" name="description" onChange={handleChange} value={transaction.description} maxlength="100" required ></textarea><br></br>

                        <input type="date" name="date" onChange={handleChange} value={transaction.date} /><br></br><br></br>

                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </InnerLayout >

    )
}



export default Income