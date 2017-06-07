import React from 'react';
import { connect } from 'react-redux';

const IncomePlan = ({ value }) => (
  <td>{value}</td>     
)

const IncomeFact = ({ value }) => (
  <td>{value}</td>
)

let IncomeCategory = ({ name, operations }) => (

  <tr>
    <td>{name}</td>
    {[...operations].map(op => 
        op.subtype === 'plan'
          ? <IncomePlan key={op.id} value={op.value} />
          : <IncomeFact key={op.id} value={op.value} />
    )}
  </tr>

);

function* mapMonthsToOperations(months, operations) {
  for (var i = 0; i < months.length; i++) {
    const op = operations.find(o => o.month === months[i]);
    yield { id: i * 2, subtype: 'plan', value: op ? op.plan : null };
    yield { id: i * 2 + 1, subtype: 'fact', value: op ? op.fact : null };
  }
}

const mapStateToProps = (state, props) => ({
  operations: mapMonthsToOperations(state.months, state.operations.filter(o => o.categoryId === props.id))
});

IncomeCategory = connect(
  mapStateToProps
)(IncomeCategory);

export default IncomeCategory;
