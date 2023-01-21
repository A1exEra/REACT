import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
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
