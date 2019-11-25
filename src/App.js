import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ExpenseInputForm from "./components/ExpenseInputForm";
import OutputTable from "./components/OutputTable";
import './index.css';

class App extends React.Component {
  
  constructor(props) {
    
    super()
    this.addExpense =this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      expensetype: '',
      expensediscription: '',
      expensedate: '',
      expenseamount: '',
      expensearrayofobjects:[],
      obj:{}
    }
    
  }
  
  handleChange= (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  addExpense= (e) => {
    e.preventDefault()
    const newExpenseType = this.state.expensetype;
    //console.log(newExpenseType);
    const newExpenseDiscription = this.state.expensediscription;
    const newExpenseDate = this.state.expensedate;
    const newExpenseAmount = this.state.expenseamount;
    const obj = {'expensetype': newExpenseType, 'expensediscription': newExpenseDiscription,'expensedate': newExpenseDate, 'expenseamount': newExpenseAmount };
    this.setState({
      expensearrayofobjects: [ ...this.state.expensearrayofobjects, obj]
    });
     console.log(this.state.expensearrayofobjects);
  }
 
render(){
  return (
   <div>
    <ExpenseInputForm 
      expensetype={this.expensetype}
      expensediscription={this.expensediscription}
      expensedate={this.expensedate}
      expenseamount={this.expenseamount}
      handleChange={this.handleChange}
      addExpense={this.addExpense}/>
    <OutputTable 
      expensetype={this.expensetype}
      expensediscription={this.expensediscription}
      expensedate={this.expensedate}
      expenseamount={this.expenseamount}
      handleChange={this.handleChange}
      addExpense={this.addExpense}
    />
    </div>
  );
}
}

export default App;
