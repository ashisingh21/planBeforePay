import React from 'react'
import { InnerLayout } from '../../style/Layout'
import styled from 'styled-components'

const Income = () => {
    return (

        <InnerLayout>
            <h1>Incomes</h1>
            <div className='income-content'>
                <div className='form-container'>
                    <form>
                        <input type='text'></input>
                    </form>
                </div>
                <div className='incomes'></div>
            </div>
        </InnerLayout>

    )
}

const IncomeStyled = styled.div`


`

export default Income