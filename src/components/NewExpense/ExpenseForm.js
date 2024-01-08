import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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
  const addExpense = () => {
    const expenseData = {
      title,
      amount,
      date,
    };

    props.onFormFilled(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const changeState = () => {
    setButton((prevvalue) => !prevvalue);
  };

  const [button, setButton] = useState(true);

  return (
    <form className="form" onSubmit={addExpense}>
      {button ? (
        <button className="new-expense-button" onClick={changeState}>
          Add New Expense
        </button>
      ) : (
        <>
          <input
            type="text"
            value={title}
            placeholder="Expense Title"
            className="expenseInput"
            required
            onChange={(e) => changeTitle(e)}
          />
          <input
            type="number"
            value={amount}
            placeholder="Expense Amount"
            className="expenseInput"
            required
            onChange={(e) => changeAmount(e)}
          />
          <input
            type="date"
            value={date}
            placeholder="Expense Date"
            className="expenseInput"
            required
            onChange={(e) => changeDate(e)}
          />
          <button
            className="expenseBtn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (document.querySelector(".form").checkValidity()) {
                addExpense();
                changeState();
              } else {
                alert("Please fill in all required fields.");
              }
            }}
          >
            Add Expense
          </button>
          <button className="cancel-button" type="submit" onClick={changeState}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

export default ExpenseForm;
