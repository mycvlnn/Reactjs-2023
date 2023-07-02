import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses({ expenses = [] }) {
    return (
        <Card className="expenses">
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
        </Card>
    );
}

export default Expenses;
