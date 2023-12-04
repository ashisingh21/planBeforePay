import React from 'react'
import { useTransaction } from '../../context/AllTransaction'

const Dashboard = () => {

    const { allTransaction, setAllTransaction } = useTransaction()


    return (

        <>
            <div>Dashboard</div>
            {
                allTransaction.map((transaction, index) => (

                    <h2 key={index}>{transaction.amount}</h2>

                ))}
        </>
    )
}

export default Dashboard