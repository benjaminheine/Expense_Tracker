import React from "react";

class ExpenseInputTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensetype: '',
      expensediscription: '',
      expensedate: '',
      expenseamount: ''
    };
  }

  handleExpenseTypeChange = (event) => {
    this.setState( {
      expensetype: event.target.value
  })
}

handleExpenseDiscription = (event) => {
  this.setState({
    expensediscription: event.target.value
  })
}

handleExpenseDate = (event) => {
  this.setState({
    expensedate: event.target.value
  })
}

handleExpenseAmount = (event) => {
  this.setState ({
    expenseamount: event.target.value
  })
}
  //   // Create new Expense object
  //   // Add type, name, date and amount to that object and to localStorage
  //   // Put expense object into table
  //   // var expenseTypeSelection = document.getElementById('typeOfExpense');
  //   // var expenseDiscription = document.getElementById(expenseDiscription);
  //   // var dayOfExpense = document.getElementById(dayOfExpense);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expence Tracker App</h1>
        </header>
        <h1>Add a new item:</h1>
        <form>
          <table className="Table-input">
            <tbody>
              <tr>
                <td>
                  Type:
                  <select id="typeOfExpense" value={this.state.expensetype} onChange={this.handleExpenseTypeChange}>
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
                    id="expenseDiscription"
                    value={this.state.expensediscription}
                    placeholder="What did you spend on?"
                    onChange={this.handleExpenseDiscription}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  Date:
                  <input
                    type="date"
                    id="dayOfExpense"
                    value={this.state.expensedate}
                    onChange={this.state.handleExpenseDate}
                  ></input>
                </td>
                <td>
                  Amount:
                  <input
                    type="text"
                    id="expenseAmount"
                    value={this.state.expenseamount}
                    placeholder="How much?"
                    onChange={this.state.handleExpenseAmount}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button onClick={this.submitExpense}>Submit Expense</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseInputTable;
