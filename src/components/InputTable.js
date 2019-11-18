import React from "react";

function InputTable() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expence Tracker App</h1>
      </header>
      <h1>Add a new item:</h1>
      <table className="Table-input">
        <tr>
          <td>
            Type:
            <select>
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </td>
          <td>
            Name:
            <input
              type="text"
              name="discription"
              value="What did you spend on?"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            Date:<input type="date" name="bday"></input>
            <input type="submit"></input>
          </td>
          <td>
            Amount:<input type="text" name="amount" value="How much?"></input>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default InputTable;
