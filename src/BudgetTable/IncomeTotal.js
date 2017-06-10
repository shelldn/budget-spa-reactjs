import React from 'react';
import { connect } from 'react-redux';

let IncomeTotal = ({ totals }) => (

  <tr>
    <th></th>
    {[...totals].map((t, idx) => 
      <td key={idx}>{t}</td>
    )}
  </tr>

);

function* mapMonthsToTotals(months, operations) {
  for (var i = 0; i < months.length; i++) {
    let op = operations
      .filter(o => o.month === months[i])
      .reduce((a, b) => ({
        plan: a.plan + b.plan,
        fact: a.fact + b.fact
      }), { plan: 0, fact: 0 })
    yield op.plan;
    yield op.fact;
  }
}

const mapStateToProps = ({ months, categories, operations }) => ({
  totals: mapMonthsToTotals(months, operations.filter(o => categories.filter(c => c.type === 'income').some(c => c.id === o.categoryId)))
});

IncomeTotal = connect(
  mapStateToProps
)(IncomeTotal);

export default IncomeTotal;
