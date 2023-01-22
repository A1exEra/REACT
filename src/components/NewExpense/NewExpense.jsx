import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isActive, setIsActive] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `${Math.floor(Math.random() * 100) + 1}`,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const onHideForm = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="new-expense">
      {!isActive && <button onClick={onHideForm}>ADD NEW EXPENSE</button>}
      {isActive && (
        <ExpenseForm
          isActiveHandler={onHideForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
