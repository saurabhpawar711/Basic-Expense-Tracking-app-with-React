import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import "./index.css";

const App = () => {
  return (
    <div>
      <h2>Expense Items</h2>
      <ExpenseForm />
      <Expenses />
    </div>
  );
};

export default App;
