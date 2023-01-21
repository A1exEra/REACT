import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem expenses={el} key={el.id} />
      ))}
    </Card>
  );
}
export default Expenses;
