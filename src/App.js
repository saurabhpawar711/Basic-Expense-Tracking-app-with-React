
import { ExpenseItem } from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 299,
      location: 'Policybazar'
    },
    {
      title: 'TV Set',
      amount: 234.35,
      location: 'Croma'
    },
    {
      title: 'Petrol',
      amount: 56.45,
      location: 'Indian Oil'
    },
  ]
  return (
    <div>
      <h2>Expense Items</h2>
      {expenses.map(expense => (
        <ExpenseItem title={expense.title} amount={expense.amount} location={expense.location} />
      ))
      }
    </div>
  );
}

export default App;
