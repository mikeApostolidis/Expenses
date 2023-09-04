import { useState } from 'react';
import './App.css';
import Expenses from './components/ExpensesF/Expenses';
import init_expenses from "./components/ExpensesF/expensesDB";
import NewExpensesNest from './components/NewExpenses/NewExpensesNest';

function App() {
const [expenses, setExpenses]=useState(init_expenses);


  function addExpenseHandler(expense){
    setExpenses(prevExpense => [expense, ...prevExpense]);
    
  }

  const addPickedYearHandler = (addPickedYearHandler)=>{
    console.log(addPickedYearHandler);
    console.log('In App.js');
    
  }
  return (
    <div>
    <NewExpensesNest onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} onPickedYear={addPickedYearHandler}/>
  </div>
  );
}

export default App;
