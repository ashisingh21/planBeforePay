import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import { comment, trash } from '../../utils/Icons'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from '../Transaction/TransactionItem'
import { useTransaction } from '../../context/AllTransaction'

const Income = () => {
  var api = 'http://localhost:8080'


  const { allTransaction,
    fetchAllTransaction,
    handleDelete,
    handleUpdateClick, totalIncomeLength } = useTransaction()




  useEffect(() => {
    fetchAllTransaction()
  }, [])
  return (
    <InnerLayout>
      <h1>Incomes</h1>
      <div className='income-content'>

        <div>
          {totalIncomeLength > 0 ? '' : <h3>No Incomes added, Please Add an Income.</h3>}


          {allTransaction.filter(item => item.type === 'income').map((transactionItem, index) => (
            <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete} transactionItem={transactionItem}></TransactionItem>
          ))}


        </div>

      </div>
    </InnerLayout >
  )
}

export default Income