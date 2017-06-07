import React from 'react';
import { connect } from 'react-redux';

let OutgoCategory = ({ name, operations }) => (

  <tr>
    <td>{name}</td>
    {[...operations].map(o => <td key={o.id}>{o.value}</td>)}
  </tr>

);

const filterOperations = (operations, categoryId) => (
  operations.filter(o => o.categoryId === categoryId)
)

function* mapMonthsToOperations(months, operations) {
  for (var i = 0; i < months.length; i++) {
    let op = operations.find(o => o.month === months[i]);
    yield { id: i * 2, value: op ? op.plan : 0 };
    yield { id: i * 2 + 1, value: op ? op.fact : 0 };
  }  
}

const mapStateToProps = (state, props) => ({
  operations: mapMonthsToOperations(state.months, filterOperations(state.operations, props.id))
});

OutgoCategory = connect(
  mapStateToProps
)(OutgoCategory);

export default OutgoCategory;
