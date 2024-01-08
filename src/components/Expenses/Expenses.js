import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("All");
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

  const getYear = (year) => {
    setYear(year);
  };

  const getYearlyData = (year) => {
    if (year === "All") {
      return expenses;
    }
    const regexPattern = new RegExp(`^${year}-\\d{2}-\\d{2}$`);
    const yearlyExpenses = expenses.filter((expense) =>
      regexPattern.test(expense.date)
    );
    return yearlyExpenses;
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={getYear} />
      {getYearlyData(year).map((expense) => (
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
