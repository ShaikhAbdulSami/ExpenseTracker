import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  return (

    <Row className="text-center">
      <Col sm={6}>
      <h4 className="income"><b>Income</b></h4>
        <p className="money plus"><strong>{income} PKR</strong></p>
      </Col>
      <Col sm={6}>
      <h4 className="expense"><b>Expense</b></h4>
        <p className="money minus"><strong>{expense} PKR</strong></p>
      </Col>
    </Row>
  )
}
