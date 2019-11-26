import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExpenseInputForm from "./components/ExpenseInputForm";
//import OutputTable from "./components/OutputTable";
import ExpenseRow from "./components/ExpenseRow";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {},
      expensetype: "Card",
      expensediscription: "",
      expensedate: "",
      expenseamount: "",
      expensearrayofobjects: []
    };
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addExpense = e => {
    this.setState({
      expensearrayofobjects: [
        ...this.state.expensearrayofobjects,
        {
          expensetype: this.state.expensetype,
          expensediscription: this.state.expensediscription,
          expensedate: this.state.expensedate,
          expenseamount: this.state.expenseamount
        }
      ]
    });
    console.log(this.state.expensearrayofobjects);

    e.preventDefault();
  };

  render() {
    let expenseRows = this.state.expensearrayofobjects.map(expense => {
      return <ExpenseRow expensearrayofobjects={expense} />;
    });
    return (
      <div>
        <ExpenseInputForm
          expensetype={this.expensetype}
          expensediscription={this.expensediscription}
          expensedate={this.expensedate}
          expenseamount={this.expenseamount}
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
