import React from "react";
import InputTable from "./components/InputTable";
import OutputTable from "./components/OutputTable";
import Expenses from "./Expenses";

function App() {
  const expensesFromLocalStorage = [];

  return (
    <div>
    <InputTable />
    <OutputTable />
    </div>
  );
}

export default App;
