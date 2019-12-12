import React from 'react';
import ExpenseRow from './ExpenseRow';

function ExpenseTable (props) {
    let expenseRows = props.expenses.map((expense, index) => (
        <ExpenseRow
          key={index}
          expense={expense}
          deleteExpenseByCheckbox={props.deleteExpense}
        />
      ));
    return(
        <table id="expense-table" className="table-input">
          <tbody>
            <tr>
              <th>type</th>
              <th>name</th>
              <th>date</th>
              <th>amount</th>
            </tr>
            {expenseRows}
          </tbody>
        </table>
    )
}

export default ExpenseTable;