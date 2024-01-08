import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeYear = (e) => {
    props.onYearChange(e.target.value);
  };
  return (
    <div className="filteryear">
      <label className="filter-label">Filter by Year</label>
      <select
        className="yearlist"
        onChange={(e) => {
          changeYear(e);
        }}
      >
        <option value="All">All</option>
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
