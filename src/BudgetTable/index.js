import React from 'react';
import Table, { Head, Body, Row, Cell } from '../Table';
import { connect } from 'react-redux';
import './index.css';

let BudgetTable = ({ months }) => (
  <Table>
    <Head>
      <Row>
        <Cell />
        {months.map(m => 
          <Cell colSpan={2} key={m}>{m}</Cell>
        )}
      </Row>
      <Row>
        <Cell />
        {months.map(_ => [
          <Cell>Plan</Cell>,
          <Cell>Fact</Cell>
        ])}
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>Income</Cell>
        {months.map(m => 
          <Cell colSpan={2} key={m}>{m}</Cell>
        )}
      </Row>
    </Body>
    <Body>
      <Row>
        <Cell>Outgo</Cell>
        {months.map(m => 
          <Cell colSpan={2} key={m}>{m}</Cell>
        )}
      </Row>
    </Body>
  </Table>
);

const mapStateToProps = (state) => ({
  months: state.months
});

BudgetTable = connect(
  mapStateToProps
)(BudgetTable);

export default BudgetTable;
