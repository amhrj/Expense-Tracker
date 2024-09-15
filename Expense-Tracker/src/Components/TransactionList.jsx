import React from 'react';

const TransactionList = ({ history, deleteTransaction }) => {
  // Function to format the amount with a dollar sign
  const formatAmount = (amount) => {
    const sign = amount < 0 ? '-' : '';
    const absAmount = Math.abs(amount).toFixed(2);
    return `${sign}$${absAmount}`;
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {history.map((transaction) => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{formatAmount(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
