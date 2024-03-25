import React, { useState } from "react";
import "./ExpensesItem.css";
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
  // State to hold the price, initialized with props.price
  const [price, setPrice] = useState(props.price);

  // Function to update the price
  function updation() {
    // Update the price to "$100"
    setPrice('100');
    console.log(price)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* Display the price from state */}
        <div className="expense-item__price">${price}</div>
      </div>

      {/* Button to trigger the updation function */}
      <button style={{backgroundColor:'blue', border:'1px solid white', borderRadius:'10px', padding:'12px 20px', color:'white', marginLeft:'10px', font:'18px'}} onClick={updation}>Update</button>
    </Card>
  );
}

export default ExpenseItem;