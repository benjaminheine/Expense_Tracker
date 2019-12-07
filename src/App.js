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
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteExpenseByCheckbox = e => {
    document
      .getElementById("expenseTable")
      .deleteRow(e.target.parentElement.parentElement.rowIndex);
    console.log(e.target.parentElement.parentElement);
    e.persist();
  };

  addExpense = e => {
    if (
      !this.state.expenseDiscription ||
      !this.state.expenseDate ||
      !this.state.expenseAmount
    ) {
      alert("Please fill out all fields!");
      e.preventDefault();
      return; //false;
    } else {
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
        };
      });

      e.target.expenseType.value = "card";
      e.target.expenseDiscription.value = "";
      e.target.expenseDate.value = "";
      e.target.expenseDate.value = "";
      e.target.expenseAmount.value = null;

      this.setState({
        expenseType: "Card",
        expenseDiscription: "",
        expenseDate: "",
        expenseAmount: ""
      });

      e.preventDefault();
    }
  };

  render() {
    let expenseRows = this.state.expenseArrayOfObjects.map(expense => (
      <ExpenseRow
        key={this.state.expenseArrayOfObjects.indexOf(expense)}
        expenseArrayOfObjects={expense}
        deleteExpenseByCheckbox={this.deleteExpenseByCheckbox}
      />
    ));
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
              <th>remove</th>
            </tr>
            {expenseRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
