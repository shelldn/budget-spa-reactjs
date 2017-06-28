import React from 'react';
import { Cell } from '../Table';
import { connect } from 'react-redux';

let Plan = ({ plan }) => <Cell>{plan}</Cell>;
let Fact = ({ fact }) => <Cell>{fact}</Cell>

const find = (operations, month, categoryId) => {
  const operation = operations.find(o =>
    o.monthId === month &&
    o.categoryId === categoryId);

  return operation || { plan: 0, fact: 0 };
}

const mapStateToProps = (state, props) => ({
  plan: find(
    state.operations,
    props.month,
    props.categoryId).plan,
  fact: find(
    state.operations,
    props.month,
    props.categoryId).fact
})

Plan = connect(mapStateToProps)(Plan);
Fact = connect(mapStateToProps)(Fact);

const operation = (month, categoryId) => [
  <Plan month={month} categoryId={categoryId}  />,
  <Fact month={month} categoryId={categoryId}  />,
]

export default operation;
