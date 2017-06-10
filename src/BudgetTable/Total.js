import React from 'react';
import { connect } from 'react-redux';

let Total = ({ total }) => (
  <th>{total}</th>
)

const sum = (operations) => operations.reduce((a, b) => a + b, 0);

function getByType(type, categories, operations) {
  return operations.filter(o => categories.some(c => c.type === type && c.id === o.categoryId));
}

const mapStateToProps = (state, props) => {
  const monthOperations = state.operations
    .filter(o => o.month === props.month);

  const getIncomes = getByType.bind(null, 'income', state.categories);
  const getOutgoes = getByType.bind(null, 'outgo', state.categories);

  const incomes = getIncomes(monthOperations).map(i => props.plan ? i.plan : i.fact);
  const outgoes = getOutgoes(monthOperations).map(o => props.plan ? o.plan : o.fact);

  return {
    total: sum(incomes) - sum(outgoes)
  };
}

Total = connect(
  mapStateToProps
)(Total);

export default Total;
