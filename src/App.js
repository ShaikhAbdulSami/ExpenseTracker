import React from 'react';
import { Balance } from './components/Balance';
import { AccountSummary } from  './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
//import {Footer2} from './components/Footer2'
import './App.css';

export default function App() {
  return (
    
    <GlobalProvider>
      <Container className='bg-header-text' style={{width:"80%"}} >
      <div className='jumbotron bg-header-text text-center'>
            <Container  sm={4} className='expense2'>
            <h1>  Expense Tracker</h1>
            </Container>
      </div>
      </Container>
      <Container fluid className=' bg-header-text'  style={{width:"80%"}} >
        <Row>
          <Col>
            <Balance />
          </Col>
        </Row>
        <Row>
          <Col>
            <AccountSummary />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <AddTransaction />
          </Col>
          <Col sm={9}>
          <TransactionHistory />
          </Col>
        </Row> 
      </Container>
    </GlobalProvider>
  );
}
