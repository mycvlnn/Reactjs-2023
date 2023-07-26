import { styled } from "styled-components";

const ExpenseFormStyled = styled.form({
    ".new-expense__controls": {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1rem",
        textAlign: "left",
    },
    ".new-expense__control label": {
        fontWeight: "bold",
        marginBottom: "0.5rem",
        display: "block",
    },

    ".new-expense__control input": {
        font: "inherit",
        padding: "0.5rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "20rem",
        maxWidth: "100%",
    },

    ".new-expense__actions": {
        textAlign: "right",
        opacity: (props) => {
            return props.invalidForm ? 0.6 : 1;
        },
        pointerEvents: (props) => (props.invalidForm ? "none" : "visible"),
    },
    "@media (max-width: 414px)": {
        ".new-expense__actions": {
            textAlign: "left",
            button: {
                width: "100%",
                marginRight: 0,
                marginTop: 20,
            },
        },
        ".new-expense__control": {
            width: "100%",
        },
        ".new-expense__control input": {
            width: "100%",
        },
    },
});

export default ExpenseFormStyled;
