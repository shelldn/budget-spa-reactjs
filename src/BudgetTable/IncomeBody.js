import React from 'react';
import { Body, Row, Cell } from '../Table';
import operation from '../operations/operation';
import { connect } from 'react-redux';

let IncomeBody = ({ months, categories }) => (

  <Body>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell className="budget-table__cell budget-table__cell--income">{c.name}</Cell>
        {months.map(m => operation(m, c.id))}
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
  categories: sort(filter(state.categories.list))
})

IncomeBody = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBody;
