import React from 'react'
import { InnerLayout } from '../../style/Layout'

const Expense = () => {
    return (
        <InnerLayout>
            <h1>expense</h1>
            <div className='expense-content'>
                <div className='form-container'></div>
                <div className='expense'></div>
            </div>
        </InnerLayout>
    )
}

export default Expense