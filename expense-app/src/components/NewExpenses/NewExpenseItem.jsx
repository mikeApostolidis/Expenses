import React, { useState } from "react";
import "./NewExpenseItem.css";

function NewExpenseItem(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
   const [date, setDate] = useState('');
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [newExp, setNewExp] = useState(false);

/*   function userInputHandler(id, value) {
    if (id == "title") setUserInput(value);
    else if (id == "amount") setUserInput(value);
    else if (id == "date") setUserInput(value);
    else console.log("Something is wrong");

    console.log(userInput);
  }
 */
  function titleChangeHandler(event) {
    setTitle(event.target.value);

    /* setUserInput({
            ...userInput,
            title: event.target.value
        }) */

    /* setUserInput((prevValue) => {
      return { ...prevValue, title: event.target.value }; 
    }); */

    console.log(title);
   // console.log(userInput.title);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
    
/*     setUserInput({
      ...userInput,
      amount: event.target.value,
    }); */
     console.log(amount);
    //console.log(userInput.amount);
  }
  function dateChangeHandler(event) {
     setDate(event.target.value);
/*     setUserInput({
      ...userInput,
      date: event.target.value,
    }); */
    console.log(date);
    //console.log(userInput.date);

  }

  function submitHandler(event){
    event.preventDefault();

    const expenseValues = {
        title : title,
        amount : +amount,
        date : new Date(date)
    };


    props.onSaveExpenseData(expenseValues);
    
    setTitle('');
    setAmount('');
    setDate('');
    

  }



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      
         <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
          
          
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelBut}>Cancel</button>
          <button type="submit">Add Expenses</button>
        </div> 
      </div>
    </form>
  );
}
export default NewExpenseItem;
