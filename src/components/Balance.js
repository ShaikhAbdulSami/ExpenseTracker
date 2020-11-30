import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {  Row, Col } from 'react-bootstrap';
import '../App.css';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Row>
      <Col className="text-center ">
      <h4>Your Balance</h4>
        <h1>{total} PKR</h1>
        </Col>
    </Row>
  )
}
