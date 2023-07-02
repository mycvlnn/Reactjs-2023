import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./constants/Expense";

function App() {
    return (
        <div className="App">
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
