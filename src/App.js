import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpenseRow from "./components/ExpenseRow";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {},
      expenseType: "Card",
      expenseDiscription: "",
      expenseDate: "",
      expenseAmount: "",
      expenseArrayOfObjects: []
    };
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteExpenseByCheckbox = this.deleteExpenseByCheckbox.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  deleteExpenseByCheckbox = e => {
    //let i = e.parentElement.rowIndex;
    document.getElementById("expenseTable").deleteRow(e.target.parentElement.parentElement.rowIndex);
    console.log(e.target.parentElement.parentElement);
    e.persist();
    //e.preventDefault();
  };
  
  addExpense = e => {
    if (!this.state.expenseDiscription || !this.state.expenseDate || isNaN(this.state.expenseAmount)){
      alert("Please fill out all fields!")
      return false;
    }

    this.setState(prevState => {
      return {
      expenseArrayOfObjects: [
        ...prevState.expenseArrayOfObjects,
        {
          expenseType: prevState.expenseType,
          expenseDiscription: prevState.expenseDiscription,
          expenseDate: prevState.expenseDate,
          expenseAmount: prevState.expenseAmount
        }
      ]
    }
  });
  
    //   this.setState({
    //     expenseType: "Card",
    //     expenseDiscription: "",
    //     expenseDate: "",
    //     expenseAmount: ""
    // });
    e.preventDefault();
    };
    
  resetForm = () => { 
    this.setState({
      expenseType: "Card",
      expenseDiscription: "",
      expenseDate: "",
      expenseAmount: ""
      
    });
  }
  
  


  render() {
    let expenseRows = this.state.expenseArrayOfObjects.map(expense => 
      <ExpenseRow key={this.state.expenseArrayOfObjects.indexOf(expense)} expenseArrayOfObjects={expense} deleteExpenseByCheckbox={this.deleteExpenseByCheckbox} />
    );
    return (
      <div>
        <ExpenseInputForm
          expenseType={this.expenseType}
          expenseDiscription={this.expenseDiscription}
          expenseDate={this.expenseDate}
          expenseAmount={this.expenseAmount}
          handleChange={this.handleChange}
          addExpense={this.addExpense}
        />
        <table id="expenseTable" className="Table-input">
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
      </div>
    );
  }
}

export default App;
