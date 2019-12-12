import React from "react";

function ExpenseRow(props) {
  const expense = props.expense;
  return (
    <tr id={expense.expenseID}>
      <td>{expense.expenseType}</td>
      <td>{expense.expenseDiscription}</td>
      <td>{expense.expenseDate}</td>
      <td>{expense.expenseAmount}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.deleteExpenseByCheckbox}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default ExpenseRow;
