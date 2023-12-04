import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Toastify from 'toastify-js'
const TransactionContext = createContext()

const AllTransaction = ({ children }) => {

    var api = 'http://localhost:8080'

    const [allTransaction, setAllTransaction] = useState([])
    const [transaction, setTransaction] = useState({ title: '', amount: '', category: '', type: '', description: '', date: '' })


    useEffect(() => {
        fetchAllTransaction()
        localStorage.setItem('allTransaction', JSON.stringify(allTransaction))
    }, [])


    const totalIncome = allTransaction.filter(item => item.type === 'income');

    const totalExpanse = allTransaction.filter(item => item.type === 'expanse');

    const totalIncomeLength = totalIncome.length;

    const totalExpanseLength = totalExpanse.length;


    const fetchAllTransaction = async () => {

        const res = await axios.get(`${api}/api/v1/all-transaction`)
        if (res.data.success) {

            setAllTransaction(res.data.allTransaction)
        }
    }

    const handleUpdateClick = async (id) => {

        alert('ehiwhfohwfho')
    }

    const handleUpdateSubmit = async (id) => {

        const res = await axios.put(`${api}/api/v1/update-transaction/${id}`, {
            title: transaction.title,
            description: transaction.description,
            category: transaction.category,
            type: transaction.type,
            amount: transaction.amount,
            date: transaction.date
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
            setTransaction({ title: '', amount: '', category: '', type: '', description: '', date: '' })
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




    const contextValues = {
        allTransaction,
        setAllTransaction,
        fetchAllTransaction,
        totalIncome,
        totalExpanse,
        handleDelete,
        handleUpdateClick,
        handleUpdateSubmit,
        totalIncomeLength,
        totalExpanseLength
    }




    return (
        <>
            <TransactionContext.Provider value={contextValues}>
                {children}
            </TransactionContext.Provider>

        </>
    )
}

const useTransaction = () => useContext(TransactionContext)

export { useTransaction, AllTransaction }