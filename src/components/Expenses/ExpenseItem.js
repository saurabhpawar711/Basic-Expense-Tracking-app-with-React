import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const [title, setTitle] = useState(props.title);

  const updateExpense = () => {
    setAmount(100);
  };

  const updateExpenseTitle = () => {
    setTitle('Updated Title!!');
  }

  const day = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Card className="expense-item">
      <div className="expenseDate">{day}</div>
      <ExpenseDetails
        title={title}
        amount={amount}
      />
      <button className="updateExpenseBtn" onClick={updateExpense}>
        Update Amount
      </button>
      <button className="updateExpenseTitleBtn" onClick={updateExpenseTitle}>
        Update Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
