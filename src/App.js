import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpenseRow from "./components/ExpenseRow";
import "./index.css";
import ExpenseTable from "./components/ExpenseTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseType: "Card",
      expenseDiscription: "",
      expenseDate: "",
      expenseAmount: "",
      expenseID: "",
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
    let cleanedExpenseArrayOfObjects = this.state.expenseArrayOfObjects.filter(
      obj => {
        return obj.expenseID != e.target.parentElement.parentElement.id;
      }
    );
    this.setState({
      expenseArrayOfObjects: cleanedExpenseArrayOfObjects
    });
    localStorage.setItem(
      "expenses",
      JSON.stringify(cleanedExpenseArrayOfObjects)
    );
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
      return;
    }

    this.setState(
      {
        expenseArrayOfObjects: [
          ...this.state.expenseArrayOfObjects,
          {
            expenseType: this.state.expenseType,
            expenseDiscription: this.state.expenseDiscription,
            expenseDate: this.state.expenseDate,
            expenseAmount: this.state.expenseAmount,
            expenseID: Date.now()
          }
        ]
      },
      function() {
        localStorage.setItem(
          "expenses",
          JSON.stringify(this.state.expenseArrayOfObjects)
        );
        this.setState({
          expenseType: "Card",
          expenseDiscription: "",
          expenseDate: "",
          expenseAmount: ""
        });
      }
    );
    e.preventDefault();
  };

  componentDidMount() {
    const expenseLocalStorageData = JSON.parse(
      localStorage.getItem("expenses")
    );
    if (expenseLocalStorageData.length > 0) {
      this.setState({
        expenseArrayOfObjects: JSON.parse(localStorage.getItem("expenses"))
      });
    }
  }

  render() {
    return (
      <div>
        <ExpenseInputForm
          expenseType={this.state.expenseType}
          expenseDiscription={this.state.expenseDiscription}
          expenseDate={this.state.expenseDate}
          expenseAmount={this.state.expenseAmount}
          handleChange={this.handleChange}
          addExpense={this.addExpense}
        />
        <ExpenseTable
          expenses={this.state.expenseArrayOfObjects}
          deleteExpense={this.deleteExpenseByCheckbox}
        />
      </div>
    );
  }
}

export default App;
