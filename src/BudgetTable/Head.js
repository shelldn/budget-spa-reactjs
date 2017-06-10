import React from 'react';
import Total from './Total';
import { connect } from 'react-redux';

let Head = ({ months, operations }) => (

  <thead>

    {/* Months */}
    <tr>
      <th></th>
      {months.map(m => <th key={m} colSpan="2">{m}</th>)}
    </tr>

    {/* Plan/Fact */}
    <tr>
      <th></th>
      {operations.map((o, idx) => <th key={idx}>{o.plan ? 'Plan' : 'Fact'}</th>)}
    </tr>

    {/* Totals */}
    <tr>
      <th></th>
      {operations.map((o, idx) => <Total key={idx} {...o} />)}
    </tr>

  </thead>

);

function* mapMonthsToOperations(months) {
  for (var i = 0; i < months.length; i++) {
    yield {
      plan: true,
      month: months[i]
    };
    yield {
      plan: false,
      month: months[i]
    };
  }  
}

const mapStateToProps = (state) => ({
  months: state.months,
  operations: [...mapMonthsToOperations(state.months)]
});

Head = connect(
  mapStateToProps
)(Head);

export default Head;
