import React from "react";
import ExpenseInputTable from "./components/ExpenseInputTable";
import ExpenseOutputTable from "./components/ExpenseOutputTable";
//import AddExpenseButton from "./components/AddExpenseButton";

function App() {
  //const expensesFromLocalStorage = [];

  return (
    <div>
    <ExpenseInputTable />
    {/* <AddExpenseButton /> */}
    <ExpenseOutputTable />
    </div>
  );
}

export default App;
