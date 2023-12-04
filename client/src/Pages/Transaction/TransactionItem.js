import React from 'react'
import {comment, trash} from '../../utils/Icons'
import axios from 'axios'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

const TransactionContainer = (props) => {

   const { transactionItem, handleDelete, handleUpdateClick,index } = props;


  return (
        <div class="transaction-container" key={index}>
            <p className='title'>{transactionItem.title}</p>
            <p className='amount' style={transactionItem.type == 'income' ? {color:'var(--color-green)'} :  {color:'var(--color-delete)'}}>Rs {transactionItem.amount}</p>
            <p className='text-sm'>Cat: {transactionItem.category}</p>
            <p className='text-sm type' style={transactionItem.type == 'income' ? {color:'var(--color-green)',borderColor:'var(--color-green)'} :  {color:'var(--color-delete)',borderColor:'var(--color-delete)'}}>{transactionItem.type}</p>
            <p className='text-sm'>Description: {transactionItem.description}</p>
            <p className='text-sm type date'>Date: {new Date(transactionItem.date).toDateString()}</p>
            
            <div style={{display:'flex'}}>
              <button style={{border:'none', color:'var(--color-delete)', paddingLeft:'4px'}} onClick={()=> handleDelete   (transactionItem._id)}>{trash}</button> 
                                   
              <button style={{border:'none', color:'blue', paddingLeft:'4px'}} onClick={()=> handleUpdateClick   (transactionItem._id)}>{comment}</button>
            </div>
                                
        </div>
  )
}

export default TransactionContainer