import React, { useEffect, useState } from 'react'
import { InnerLayout } from '../../style/Layout'
import axios from 'axios'
import { useTransaction } from '../../context/AllTransaction'

const Saving = () => {


    const { allTransaction } = useTransaction()


    const totalAmounts = () => {
        let totalIncomeAmount = 0;

        const totalIncome = allTransaction.filter(item => item.type === 'income');

        totalIncome.forEach(element => {
            totalIncomeAmount += element.amount;
        });


    }



    useEffect(() => {
        totalAmounts()
    }, [])

    return (
        <InnerLayout>
            <h1>Savings</h1>

            <table>

                <tbody>
                    <tr>
                        <td>Month</td>
                        <td>w</td>

                    </tr>
                    <tr>
                        <td>Total Income</td>
                        <td style={{ color: 'green' }}>w</td>

                    </tr>

                    <tr>
                        <td>Total Expanse</td>
                        <td style={{ color: 'red' }}>w</td>

                    </tr>



                </tbody>
            </table>




        </InnerLayout >
    )
}

export default Saving