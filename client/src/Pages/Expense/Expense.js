import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import { comment, trash } from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from '../Transaction/TransactionItem'
import { useTransaction } from '../../context/AllTransaction'

const Expense = () => {
  var api = 'http://localhost:8080'


  const { fetchAllTransaction, allTransaction, handleUpdateClick, handleDelete,
    totalExpanseLength } = useTransaction()

  useEffect(() => {
    fetchAllTransaction()
  }, [])
  return (
    <InnerLayout>
      <h1>Transactions</h1>
      <div className='income-content'>

        <div>
          {totalExpanseLength > 0 ? '' : <h3>No Incomes added, Please Add an Income.</h3>}


          {allTransaction.filter(item => item.type === 'expanse').map((transactionItem, index) => (
            <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete} transactionItem={transactionItem}></TransactionItem>
          ))}


        </div>

      </div>
    </InnerLayout >
  )
}

export default Expense