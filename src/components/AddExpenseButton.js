import React from "react";

class AddExpenseButton extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: 0
    };
    this.submitExpense = this.submitExpense.bind(this);
  };

  submitExpense() {
    // Create new Expense object
    // Add type, name, date and amount to that object and to localStorage
    // Put expense object into table
    let 
    this.setState(prevState => {
      return {
        expenses: prevState.expenses + 1
      };
    });
    console.log(this.state.expenses);
  };
  render() {
    return (
      <div>
        <button onClick={this.submitExpense}>Submit Expense</button>
        <h1>{this.state.expenses}</h1>
      </div>
    );
  };
};

export default AddExpenseButton;
