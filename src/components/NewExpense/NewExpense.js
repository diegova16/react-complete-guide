import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const[addingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
  }

  const addingHandler = () => {
    setAddingExpense(true);
  }

  const notAddingHandler = () => {
    setAddingExpense(false);
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  let formContent = <button onClick={addingHandler}>Add new expense</button>
  
  if (addingExpense === true)
    formContent =<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={notAddingHandler} />
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <div className="new-expense">
        {formContent}
    </div>
  );
}

export default NewExpense;