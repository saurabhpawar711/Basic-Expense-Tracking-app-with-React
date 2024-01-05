import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 299,
      location: "Policybazar",
    },
    {
      title: "TV Set",
      amount: 234.35,
      location: "Croma",
    },
    {
      title: "Petrol",
      amount: 56.45,
      location: "Indian Oil",
    },
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
