import React, { Component }  from 'react';

import App from "../App"
function ExpenseInputForm (props){

    
        return (
          <div className="App">
            <header className="App-header">
              <h1>Expence Tracker App</h1>
            </header>
            <h1>Add a new item:</h1>
            
            <form onSubmit={props.addExpense}>
              <div className="form-group">
                <label>Type</label>
                <select 
                  name="expensetype"
                  value={props.expensetype}
                  onChange={props.handleChange}
                >
                  <option value="card">Card</option>
                  <option value="cash">Cash</option>
                  <option value="cryptocoin">Cryptocoin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Discription</label>
                <input 
                type="text" 
                name="expensediscription" 
                value={props.expensediscription} 
                onChange={props.handleChange} 
                placeholder="What did you spend on?"/>
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="expensedate"
                  value={props.expensedate}
                  onChange={props.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Amount:</label>
                <input
                  type="number"
                  name="expenseamount"
                  value={props.expenseamount}
                  placeholder="How much?"
                  onChange={props.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        );
      
}

export default ExpenseInputForm;