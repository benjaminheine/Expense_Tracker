import React from "react";

class ExpenseInputTable extends React.Component {
  expenseData;
  constructor(props) {
    super(props);
    this.addExpense =this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      expensetype: '',
      expensediscription: '',
      expensedate: '',
      expenseamount: ''
    }
  }

  handleChange= (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  addExpense = event => {
    event.preventDefault()
    localStorage.setItem('expenseItem',JSON.stringify(this.state));
 }
 componentDidMount() {
  this.expenseData = JSON.parse(localStorage.getItem('expenseItem'));

  if (localStorage.getItem('expenseItem')){
    this.setState({
      expensetype: this.expenseData.expensetype,
      expensediscription: this.expenseData.expensediscription,
      expensedate: this.expenseData.expensedate,
      expenseamount: this.expenseData.expenseamount
    })
  } else {
    this.setState({
      expensetype: '',
      expensediscription: '',
      expensedate: '',
      expenseamount: ''
    })
  }
}

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
              name="expensetype"
              value={this.expensetype}
              onChange={this.handleChange}
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
            name="expensediscription" 
            value={this.expensediscription} 
            onChange={this.handleChange} 
            placeholder="What did you spend on?"/>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="expensedate"
              value={this.expensedate}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="expenseamount"
              value={this.expenseamount}
              placeholder="How much?"
              onChange={this.handleChange}
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
