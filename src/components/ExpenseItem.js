import React from 'react'
import './ExpenseItem.css'

export function ExpenseItem(props) {
    const expenseDate = new Date();
    return (
        <div className='expense-item'>
            <div>{expenseDate.toString()}</div>
            <div></div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div className='expense-item__location'>{props.location}</div>
            </div>
        </div>
    )
}
