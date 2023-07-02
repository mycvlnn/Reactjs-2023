import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, price }) {
    return (
        <section className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </section>
    );
}

export default ExpenseItem;
