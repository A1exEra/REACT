import expenses from "./expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  return (
    <div className="container">
      <h1 className="mt-3">Jacked Up And Good To Go!</h1>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
