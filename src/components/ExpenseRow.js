import React from 'react';

function ExpenseRow (props) {
    return(
        <tr>
            <td>{props.expensearrayofobjects.expensetype}</td>
            <td>{props.expensearrayofobjects.expensediscription}</td>
            <td>{props.expensearrayofobjects.expensedate}</td>
            <td>{props.expensearrayofobjects.expenseamount}</td>
        </tr>
    )
}
 export default ExpenseRow;
