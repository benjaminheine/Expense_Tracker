import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpenseRow from "./components/ExpenseRow";
import "./index.css";

class App extends React.Component {
  expenseLocalStorageData;
  constructor(props) {
    super(props);

    this.state = {
      obj: {},
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
    document
      .getElementById("expenseTable")
      .deleteRow(e.target.parentElement.parentElement.rowIndex);
    let cleanedExpenseArrayOfObjects = this.state.expenseArrayOfObjects.filter(
      obj => {
        return obj.expenseID != e.target.parentElement.parentElement.id;
      }
    );

    localStorage.setItem(
      "expenses",
      JSON.stringify(cleanedExpenseArrayOfObjects)
    );
    this.expenseLocalStorageData = JSON.parse(localStorage.getItem("expenses"));
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
    } else {
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
          this.expenseLocalStorageData = JSON.parse(
            localStorage.getItem("expenses")
          );
          console.log(this.state.expenseID);
        }
      );

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

  componentDidMount() {
    this.expenseLocalStorageData = JSON.parse(localStorage.getItem("expenses"));

    if (localStorage.getItem("expenses")) {
      this.setState({
        expenseArrayOfObjects: this.expenseLocalStorageData
      });
    } else {
      this.setState({
        expenseArrayOfObjects: []
      });
    }
  }

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
              {/* <th>remove</th> */}
            </tr>
            {expenseRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
