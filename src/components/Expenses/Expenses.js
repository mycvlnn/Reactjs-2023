import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses = [] }) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />

            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
