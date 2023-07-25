import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses = [] }) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    let expenseContent = <div className="not-found">No expenses found!</div>;

    if (filteredExpenses.length > 0)
        expenseContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    price={expense.amount}
                    title={expense.title}
                />
            );
        });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
        </Card>
    );
}

export default Expenses;
