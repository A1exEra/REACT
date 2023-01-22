import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const onSelectYearHandler = (year) => {
    setSelectedYear(year);
  };
  console.log("ExpenseFilter: ", selectedYear);
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectYear={onSelectYearHandler}
        selectedYear={selectedYear}
      />
      {props.expenses.map((el) => (
        <ExpenseItem expenses={el} key={el.id} />
      ))}
    </Card>
  );
}
export default Expenses;
