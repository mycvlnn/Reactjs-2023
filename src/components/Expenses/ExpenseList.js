import React from "react";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";
import "./ExpensesList.css";

const ExpenseList = (props) => {
    if (props.items.length === 0)
        return <div className="expenses-list__fallback">No expense not found!</div>;

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        price={expense.amount}
                        title={expense.title}
                    />
                );
            })}
        </ul>
    );
};

ExpenseList.propTypes = {
    items: PropTypes.array,
};

export default ExpenseList;
