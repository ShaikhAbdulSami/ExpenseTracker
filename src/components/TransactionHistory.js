import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import '../App.css';
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h4>History</h4>
      <hr/>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
