import React from 'react';
import { Cell } from '../Table';
import { connect } from 'react-redux';

let Operation = ({ value, type }) => <Cell>{value[type]}</Cell>;

const find = (operations, month, categoryId) => {
  const operation = operations.find(o =>
    o.monthId === month &&
    o.categoryId === categoryId);

  return operation || { plan: 0, fact: 0 };
}

const mapStateToProps = (state, props) => ({
  value: find(
    state.operations,
    props.month,
    props.categoryId)
})

Operation = connect(mapStateToProps)(Operation);

const operation = (month, categoryId) => [
  <Operation month={month} categoryId={categoryId} type="plan" />,
  <Operation month={month} categoryId={categoryId} type="fact" />
]

export default operation;
