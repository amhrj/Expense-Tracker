import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenseBox from "./Components/IncomeExpenseBox";
import AddTransaction from "./Components/AddTransaction";
import TransactionList from "./Components/TransactionList";

function App() {

  const [history, setHistory] = useState(
    [
      { id: 1, text: "Flower", amount: -20 },
      { id: 2, text: "HeadPhones", amount: -300 },
      { id: 3, text: "Book", amount: -10 },
      { id: 4, text: "Income", amount: 150 }
    ]
  );

  const deleteTransaction = (id) => {
    setHistory(history.filter(transaction => transaction.id !== id));
  }

  const addTransaction = (transaction) => {
    setHistory([...history, transaction]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Balance history = {history} />
        <IncomeExpenseBox history={history}/>
        <TransactionList history = {history} deleteTransaction = {deleteTransaction} />
        <AddTransaction addTransaction = {addTransaction}/>
      </div>
    </>
  );
}

export default App;
