import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2024");
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
    const regexPattern = new RegExp(`^${year}-\\d{2}-\\d{2}$`);
    const yearlyExpenses = expenses.filter((expense) =>
      regexPattern.test(expense.date)
    );
    return yearlyExpenses;
  };

  const filteredData = getYearlyData(year);
  let expenseElements = <h2>No Expenses!!!</h2>
  if(filteredData.length > 0) {
    expenseElements = filteredData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={getYear} />
      <ExpenseChart expenses={filteredData}/>
      {filteredData.length === 0 && expenseElements}
      {filteredData.length > 0 && expenseElements}
    </Card>
  );
};

export default Expenses;
