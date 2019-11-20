import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ExpenseInputTable from "./components/ExpenseInputTable";
import OutputTable from "./components/OutputTable";
import './index.css';

function App() {
  // const expensesFromLocalStorage = [];

  return (
    <div>
    <ExpenseInputTable />
    <OutputTable />
    </div>
  );
}

export default App;
