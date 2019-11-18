import React from "react";

function ExpenseOutputTable() {
  return (
    <div>
      <table className="Table-input">
      <tbody>
        <tr>
          <th>type</th>
          <th>name</th>
          <th>date</th>
          <th>amount</th>
        </tr>
        <tr>
          <td>cash</td>
          <td>mc d</td>
          <td>14.11.2019</td>
          <td>50 Euro</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
 export default ExpenseOutputTable;