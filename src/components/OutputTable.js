import React, { Component }  from 'react';
import App from "../App"

function OutputTable (props){
  let liExpenseElement = props.items
  return (
      <table className="Table-input">
      <tbody>
        <tr>
          <th>type</th>
          <th>name</th>
          <th>date</th>
          <th>amount</th>
        </tr>
        <tr>
          <td>{props.expensetype}</td>
          <td>{props.expensediscripton}</td>
          <td>{props.expensedate}</td>
          <td>{props.expenseamount}</td>
        </tr>
        </tbody>
      </table>
  );
  
}
 export default OutputTable;