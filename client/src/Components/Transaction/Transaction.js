import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import {comment, trash} from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from './TransactionItem'

const Income = () => {
    
    
    var api = 'http://localhost:8080'

    const [transaction, setTransaction] = useState({ title: '', amount: '', category: '',type: '', description: '', date: '' })
    const [allTransaction, setAllTransaction] = useState([])





    

    

    const fetchAllTransaction = async () => {
     
        const res = await axios.get(`${api}/api/v1/all-transaction`)
        if (res.data.success) {

            setAllTransaction(res.data.allTransaction)
        }
    }

     const handleDelete = async (id) => {
        console.log(id)
        const res = await axios.delete(`${api}/api/v1/delete-transaction/${id}`)
        if (res.data.success) {

             fetchAllTransaction()
              Toastify({    
  text: "Transaction Deleted Successfully!!!",
  duration: 1500,
 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  
}).showToast();
        }
    }

    const totalIncome = allTransaction.filter(item => item.type === 'income').length;

    const totalExpanse = allTransaction.filter(item => item.type === 'expanse').length;

  


       const handleUpdateClick = async (id) => {

        alert('ehiwhfohwfho')
    }

      const handleUpdateSubmit = async (id) => {

        const res = await axios.put(`${api}/api/v1/update-transaction/${id}`,{
           title:transaction.title,
           description:transaction.description,
           category:transaction.category,
            type:transaction.type,
           amount:transaction.amount,
           date:transaction.date
        })
        if (res.data.success) {
              fetchAllTransaction()

              
              Toastify({    
  text: `${transaction.type} Updated Successfully!!!`,
  duration: 1500,
 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  
}).showToast();
            setTransaction({title: '', amount: '', category: '',type: '', description: '', date: ''})  
        }
    }

    useEffect(() => {
        fetchAllTransaction()
        

    }, [])
    return (
        <InnerLayout>
            <h1>Transactions</h1>
            <div className='income-content'>
              
                 <div>
                        {totalIncome > 0 ? <h3>Incomes : {totalIncome}</h3> : <h3>No Incomes added, Please Add an Income.</h3>}
                       
                     
                        {allTransaction.filter(item=> item.type === 'income').map((transactionItem, index) => (
                           <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete}  transactionItem={transactionItem}></TransactionItem>
                        ))}

                        
                    </div>
                    <div>

                         {totalExpanse > 0 ? <h3>Expanses : {totalExpanse}</h3> : <h3>No Expanses added, Please Add an Expanse.</h3>}
                        {allTransaction.filter(item=> item.type === 'expanse').map((transactionItem, index) => (
                            <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete}  transactionItem={transactionItem}></TransactionItem>
                        
                        ))}
                    </div>
            </div>
        </InnerLayout >

    )
}

const IncomeStyled = styled.div`


`

export default Income