import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addNewExpense = (expense) => {
    setExpenses((prevExpense) => [...prevExpense, expense]);
  };

  return (
    <div>
      <h2>Expense Items</h2>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
