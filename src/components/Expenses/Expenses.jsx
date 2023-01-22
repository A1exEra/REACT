import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const onSelectYearHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (el) => `${el.date.getFullYear()}` === selectedYear
  );
  const noExpenseFound = (
    <h1 style={{ color: "white" }}>No expenses during this year!</h1>
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectYear={onSelectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length > 0
        ? filteredExpenses.map((el) => (
            <ExpenseItem expenses={el} key={el.id} />
          ))
        : noExpenseFound}
    </Card>
  );
}
export default Expenses;
