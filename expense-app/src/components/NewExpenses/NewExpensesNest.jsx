import React, { useState } from "react";
import "./NewExpensesNest.css";
import NewExpenseItem from "./NewExpenseItem";

function NewExpensesNest(props){

    const [isEditing,setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    /* const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }; */

const clickHandler=()=>{
    setIsEditing(true);
}

const clickHandlerStop=()=>{
    console.log("hey");
    setIsEditing(false);
    
}

    return (<div className="new-expense">
    {!isEditing && (<button onClick={clickHandler}>Add New Expense</button> )}
    {isEditing && (<NewExpenseItem onSaveExpenseData={saveExpenseDataHandler} onCancelBut={clickHandlerStop}/>) }
    </div>);
}
export default NewExpensesNest;