import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <form className="form">
      <input
        type="text"
        value={title}
        placeholder="Expense Title"
        className="expenseInput"
        onChange={(e) => changeTitle(e)}
      />
      <input
        type="number"
        value={amount}
        placeholder="Expense Amount"
        className="expenseInput"
        onChange={(e) => changeAmount(e)}
      />
      <input
        type="date"
        value={date}
        placeholder="Expense Date"
        className="expenseInput"
        onChange={(e) => changeDate(e)}
      />
      <button className="expenseBtn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
