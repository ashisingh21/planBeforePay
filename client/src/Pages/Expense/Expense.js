import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import {comment, trash} from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from '../Transaction/TransactionItem'

const Expense = () => {
      var api = 'http://localhost:8080'

 
    const [allTransaction, setAllTransaction] = useState([])

    const fetchAllTransaction = async () => {
     
        const res = await axios.get(`${api}/api/v1/all-transaction`)
        if (res.data.success) {

            setAllTransaction(res.data.allTransaction)
        }
    }

        const handleUpdateClick = async (id) => {

        alert('ehiwhfohwfho')
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


       const totalExpense = allTransaction.filter(item => item.type === 'income').length;
    useEffect(()=>{
fetchAllTransaction()
    },[])
  return (
     <InnerLayout>
            <h1>Transactions</h1>
            <div className='income-content'>
              
                 <div>
                        {totalExpense > 0 ? '' : <h3>No Incomes added, Please Add an Income.</h3>}
                       
                     
                        {allTransaction.filter(item=> item.type === 'expanse').map((transactionItem, index) => (
                           <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete}  transactionItem={transactionItem}></TransactionItem>
                        ))}

                        
                    </div>
                    
            </div>
        </InnerLayout >
  )
}

export default Expense