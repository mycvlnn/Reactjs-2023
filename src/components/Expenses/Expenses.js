import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses = [] }) {
    return (
        <div className="expenses">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        price={expense.amount}
                        title={expense.title}
                    />
                );
            })}
        </div>
    );
}

export default Expenses;
