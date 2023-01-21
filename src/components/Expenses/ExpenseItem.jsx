import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseItem(props) {
  const { expenses } = props;
  const [title, setTitle] = useState(expenses.title);
  const clickHandler = () => {
    console.log("clicked!!!");
    setTitle("new Title");
  };
  //   console.log(expenses);
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{expenses.amount}</div>
      </div>
      <button className="btn btn-secondary" onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;
