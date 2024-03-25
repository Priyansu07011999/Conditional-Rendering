import React from "react";
import './NewExpense.css'
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = (props) => {

    const expenseDataHandler = (enteredData) => {
        const expensesData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpenses(expensesData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
        </div>
    )
}

export default NewExpense;