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
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = e => {
    console.log(e);
    e.persist();
  };
  
  addExpense = e => {
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
    }});
     console.log(this.state.expenseArrayOfObjects);
    e.preventDefault();
  };

  render() {
    let expenseRows = this.state.expenseArrayOfObjects.map(expense => 
      <ExpenseRow key={this.state.expenseArrayOfObjects.indexOf(expense)} expenseArrayOfObjects={expense} handleCheckbox={this.handleCheckbox} />
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
        <table className="Table-input">
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
