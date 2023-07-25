import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import DUMMY_EXPENSES from "./constants/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
