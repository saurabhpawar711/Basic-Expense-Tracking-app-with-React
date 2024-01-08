import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  const changeYear = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="filteryear">
      <label className="filter-label">Filter by year</label>
      <select
        className="yearlist"
        onChange={(e) => {
          changeYear(e);
        }}
      >
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
