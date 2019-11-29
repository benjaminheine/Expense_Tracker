import React from 'react';

function ExpenseRow (props) {
    return(
        <tr>
            <td>{props.expenseArrayOfObjects.expenseType}</td>
            <td>{props.expenseArrayOfObjects.expenseDiscription}</td>
            <td>{props.expenseArrayOfObjects.expenseDate}</td>
            <td>{props.expenseArrayOfObjects.expenseAmount}</td>
            <td><input type="checkbox"  onChange={props.handleCheckbox}/></td>
        </tr>
    )
}
 export default ExpenseRow;
