import React from 'react';
import { connect } from 'react-redux';

let Total = ({ totals }) => (

  <tr>
    <th></th>
    {[...totals].map((t, idx) => 
      <th key={idx}>{t}</th>
    )}
  </tr>

);

function* mapMonthsToTotals(months, categories, operations) {
  for (var i = 0; i < months.length; i++) {
    let op = operations.filter(o => o.month === months[i]).reduce((a, b) => ({ 
      plan: a.plan + (categories.some(c => c.type === 'income' && c.id === b.categoryId) ? 1 : -1) * b.plan,
      fact: a.fact + (categories.some(c => c.type === 'income' && c.id === b.categoryId) ? 1 : -1) * b.fact
    }), { plan: 0, fact: 0 });
    yield op.plan;
    yield op.fact;
  }
}

const mapStateToProps = ({ months, categories, operations }) => ({
  totals: mapMonthsToTotals(months, categories, operations)
});

Total = connect(
  mapStateToProps
)(Total);

export default Total;
