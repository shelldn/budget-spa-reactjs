import React from 'react';
import { Body, Row, Cell } from '../Table';
import { Plan, Fact } from '../Operation';
import { connect } from 'react-redux';

let IncomeBody = ({ months, categories, operations }) => (

  <Body>
    <Row>
      <Cell className="budget-table__income-total"></Cell>
      {months.map(() => [
        <Cell className="budget-table__income-total">0</Cell>,
        <Cell className="budget-table__income-total">0</Cell>
      ])}
    </Row>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell className="budget-table__cell budget-table__cell--income">{c.name}</Cell>
        {months.map(m => operations.find(o => o.monthId === m) || { plan: 0, fact: 0 }).map(o => [
          <Cell>
            <Plan value={o.plan} />
          </Cell>,
          <Cell>
            <Fact value={o.fact} />
          </Cell>
        ])}
      </Row>
    )}
  </Body>

);

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const sort = (categories) => categories
  .sort((a, b) => a.order > b.order);

const mapStateToProps = (state) => ({
  months: state.months,
  categories: sort(filter(state.categories.list)),
  operations: state.operations
})

IncomeBody = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBody;
