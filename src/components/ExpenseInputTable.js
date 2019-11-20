import React from "react";

class ExpenseInputTable extends React.Component {
  constructor(props) {
    super(props)

    // this.handleExpenseTypeChange =this.handleExpenseTypeChange.bind(this);
    // this.handleExpenseDiscription =this.handleExpenseDiscription.bind(this);
    // this.handleExpenseDate =this.handleExpenseDate.bind(this);
    // this.handleExpenseAmount =this.handleExpenseAmount.bind(this);

    this.state = {
      expensetype: '',
      expensediscription: '',
      expensedate: '',
      expenseamount: ''
    }
  }

  handleExpenseTypeChange = event => {
    this.setState({
      expensetype: event.target.value
    });
  };

  handleExpenseDiscription = event => {
    this.setState({
      expensediscription: event.target.value
    });
  };

  handleExpenseDate = event => {
    this.setState({
      expensedate: event.target.value
    });
  };

  handleExpenseAmount = event => {
    this.setState({
      expenseamount: event.target.value
    });
  };

  addExpense = event => {
    console.log(this.state.expensediscription);
    event.preventDefault()
  };
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expence Tracker App</h1>
        </header>
        <h1>Add a new item:</h1>
        
        <form onSubmit={this.addExpense}>
          <div className="form-group">
            <label>Type</label>
            <select 
              id="typeOfExpense"
              value={this.state.expensetype}
              onChange={this.handleExpenseTypeChange}
            >
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Discription</label>
            <input 
            type="text" 
            id="expenseDiscription" 
            value={this.state.expensediscription} 
            onChange={this.handleExpenseDiscription} 
            placeholder="What did you spend on?"/>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              id="dayOfExpense"
              value={this.state.expensedate}
              onChange={this.handleExpenseDate}
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              id="expenseAmount"
              value={this.expenseamount}
              placeholder="How much?"
              onChange={this.state.handleExpenseAmount}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}



export default ExpenseInputTable;
