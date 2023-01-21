import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    title: "Add new expense...",
    amount: 10,
    date: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = expense;
    setExpense({ title: "Add new title...", amount: 0.1, date: "" });
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            value={expense.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
