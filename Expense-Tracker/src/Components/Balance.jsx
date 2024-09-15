import React from 'react';

const Balance = ({ history }) => {
  const total = history
    .reduce((acc, item) => acc + parseInt(item.amount), 0)
    .toFixed(2);

  // Check if the total is negative and format it accordingly
  const formattedTotal = total < 0 ? `-$${Math.abs(total).toFixed(2)}` : `$${total}`;

  return (
    <div className='balance'>
      <h4>Your Balance</h4>
      <h1>{formattedTotal}</h1>
    </div>
  );
};

export default Balance;
