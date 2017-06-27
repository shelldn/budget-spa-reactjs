import React from 'react';
import Table, { Body, Row, Cell } from '../Table';
import IncomeBody from './IncomeBody';
import OutgoBody from './OutgoBody';
import { connect } from 'react-redux';
import './index.css';

let BudgetTable = ({ months, categories }) => (
  <Table>
    <Body>
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
    </Body>
    <IncomeBody />
    <OutgoBody />
  </Table>
);

const mapStateToProps = (state) => ({
  months: state.months,
  categories: state.categories.list
});

BudgetTable = connect(
  mapStateToProps
)(BudgetTable);

export default BudgetTable;
