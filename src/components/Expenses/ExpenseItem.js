import React from "react";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const day = new Date(props.date).toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="expense-item">
      <div className="expenseDate">{day}</div>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
      />
    </Card>
  );
};

export default ExpenseItem;
