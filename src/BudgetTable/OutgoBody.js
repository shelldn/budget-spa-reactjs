import React from 'react';
import { Body, Row, Cell } from '../Table';
import { connect } from 'react-redux';

let OutgoBody = ({ rowBias, months, categories }) => (

  <Body rowBias={rowBias}>
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

const getOutgoCategories = (categories) => categories.filter(c => c.type === 'outgo');

const mapStateToProps = (state) => ({
  months: state.months,
  categories: getOutgoCategories(state.categories.list)
    .sort((a, b) => a.order > b.order)
});

OutgoBody = connect(
  mapStateToProps
)(OutgoBody);

export default OutgoBody;
