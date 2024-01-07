import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 299,
    },
    {
      title: "TV Set",
      amount: 234.35,
    },
    {
      title: "Petrol",
      amount: 56.45,
    },
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
