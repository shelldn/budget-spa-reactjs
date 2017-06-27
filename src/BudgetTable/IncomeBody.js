import React from 'react';
import { Body, Row, Cell } from '../Table';
import { connect } from 'react-redux';

let IncomeBody = ({ months, categories }) => (

  <Body>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell>{c.name}</Cell>
        {months.map(m => [
          <Cell>{m}</Cell>,
          <Cell>{m}</Cell>,
        ])}
      </Row>
    )}
  </Body>

);

const getIncomeCategories = (categories) => categories.filter(c => c.type === 'income');

const mapStateToProps = (state) => ({
  months: state.months,
  categories: getIncomeCategories(state.categories.list)
    .sort((a, b) => a.order > b.order),
})

IncomeBody = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBody;
