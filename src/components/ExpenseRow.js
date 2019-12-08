import React from "react";

function ExpenseRow(props) {
  return (
    <tr id={props.expenseArrayOfObjects.expenseID}>
      <td>{props.expenseArrayOfObjects.expenseType}</td>
      <td>{props.expenseArrayOfObjects.expenseDiscription}</td>
      <td>{props.expenseArrayOfObjects.expenseDate}</td>
      <td>{props.expenseArrayOfObjects.expenseAmount}</td>
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
