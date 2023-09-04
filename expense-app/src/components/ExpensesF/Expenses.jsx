import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){

  const [year, setYear]=useState('');

  const PickedYearHandler = (DataPickedYear)=>{

        //setYear(props.expenses.filter(expense => expense.date===addPickedYearHandler));    
        setYear(DataPickedYear);
        
        props.onPickedYear(year);
  };

  const filteredExp=props.items.filter(expense => expense.date.getFullYear().toString() === year);


  return(
     <div> 
  <Card className="expenses"> 

  <ExpensesFilter  onSavedPickedYear={PickedYearHandler} selected={year}/>
  <ExpensesChart expenses={filteredExp} />
  <ExpensesList item={filteredExp}/>
  


 </Card>
 </div>

    
    
    );
}
export default Expenses;