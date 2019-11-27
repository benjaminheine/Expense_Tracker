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
      expenseType: "Card",
      expenseDiscription: "",
      expenseDate: "",
      expenseAmount: "",
      expenseArrayOfObjects: []
    };
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  // addExpense = e => {
 
    
  //     this.setState(state => {
  //       return{

  //         expenseArrayOfObjects: [
  //           ...state.expenseArrayOfObjects,
  //           {
  //             expenseType: state.expenseType,
              
  //             expenseDiscription: state.expenseDiscription,
  //             expenseDate: state.expenseDate,
  //             expenseAmount: state.expenseAmount
  //           }
  //         ]
  //       }
        
  //     });





  addExpense = e => {
    this.setState({
      expenseArrayOfObjects: [
        ...this.state.expenseArrayOfObjects,
        {
          expenseType: this.state.expenseType,
          
          expenseDiscription: this.state.expenseDiscription,
          expenseDate: this.state.expenseDate,
          expenseAmount: this.state.expenseAmount
        }
      ]
    });
    console.log(this.state.expenseArrayOfObjects);
    //console.log(this.state.expenseType);
    e.preventDefault();
  };

  render() {
    let expenseRows = this.state.expenseArrayOfObjects.map(expense => {
      return <ExpenseRow expenseArrayOfObjects={expense} />;
    });
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
