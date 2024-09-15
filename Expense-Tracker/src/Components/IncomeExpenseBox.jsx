import React from 'react'

const IncomeExpenseBox = ({ history }) => {

  const amounts = history.map(transaction => Number(transaction.amount) || 0); // Ensure amounts are numbers

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseBox;
