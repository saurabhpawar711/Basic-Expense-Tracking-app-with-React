import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getFormDetails = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return <ExpenseForm onFormFilled={getFormDetails} />;
};

export default NewExpense;
