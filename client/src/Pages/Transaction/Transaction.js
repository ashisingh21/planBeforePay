import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'
import axios from 'axios'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import TransactionItem from './TransactionItem'
import Loader from '../../Components/Loader'
import { Link } from 'react-router-dom'

import { useTransaction } from '../../context/AllTransaction'

const Transaction = () => {


    var api = 'http://localhost:8080'

    const [transaction, setTransaction] = useState({ title: '', amount: '', category: '', type: '', description: '', date: '' })


    const { allTransaction, handleUpdateClick, handleDelete, fetchAllTransaction, totalIncome, totalExpanse } = useTransaction()




    const totalIncomeLength = totalIncome.length;

    const totalExpanseLength = totalExpanse.length;


    useEffect(() => {
        fetchAllTransaction()


    }, [])
    return (
        <InnerLayout>


            <h1>Transactions</h1>

            <Link to="./add-transaction" className='button'>Add a Transaction</Link>
            <div className='transaction-content income-content'>

                <div>
                    {totalIncomeLength > 0 ? <h3>Incomes : {totalIncomeLength}</h3> : <h3>No Incomes added, Please Add an Income.</h3>}


                    {allTransaction.filter(item => item.type === 'income').map((transactionItem, index) => (
                        <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete} transactionItem={transactionItem}></TransactionItem>
                    ))}


                </div>
                <div>

                    {totalExpanseLength > 0 ? <h3>Expanses : {totalExpanseLength}</h3> : <h3>No Expanses added, Please Add an Expanse.</h3>}
                    {allTransaction.filter(item => item.type === 'expanse').map((transactionItem, index) => (
                        <TransactionItem index={index} handleUpdateClick={handleUpdateClick} handleDelete={handleDelete} transactionItem={transactionItem}></TransactionItem>

                    ))}
                </div>
            </div>
        </InnerLayout >

    )
}

const IncomeStyled = styled.div`


`

export default Transaction