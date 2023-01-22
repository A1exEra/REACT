import { useState } from "react";
import expenses from "./expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const [expensesArr, setExpenses] = useState(expenses);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  return (
    <div className="container">
      <h1 className="mt-3">Jacked Up And Good To Go!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesArr} />
    </div>
  );
}

export default App;
