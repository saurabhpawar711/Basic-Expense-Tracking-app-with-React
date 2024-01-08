import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let expenses = [
    {
      title: "Car Insurance",
      amount: 299,
      date: "2022-07-12",
      id: "1",
    },
    {
      title: "TV Set",
      amount: 234.35,
      date: "2022-09-24",
      id: "2",
    },
    {
      title: "Petrol",
      amount: 56.45,
      date: "2023-02-02",
      id: "3",
    },
  ];

  expenses = [...expenses, ...props.expenses];

  return (
    <Card className="expenses">
      <ExpenseFilter />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
