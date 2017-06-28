import React from 'react';
import { Body, Row, Cell } from '../Table';
import operation from '../operations/operation';
import { connect } from 'react-redux';

let OutgoBody = ({ rowBias, months, categories }) => (

  <Body rowBias={rowBias}>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell className="budget-table__cell budget-table__cell--outgo">{c.name}</Cell>
        {months.map(m => operation(m, c.id))}
      </Row>
    )}
  </Body>

);

const filter = (categories) => categories
  .filter(c => c.type === 'outgo');
  
const sort = (categories) => categories
  .sort((a, b) => a.order > b.order);

const mapStateToProps = (state) => ({
  months: state.months,
  categories: sort(filter(state.categories.list))
});

OutgoBody = connect(
  mapStateToProps
)(OutgoBody);

export default OutgoBody;
