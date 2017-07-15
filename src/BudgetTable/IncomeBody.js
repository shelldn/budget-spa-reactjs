import React from 'react';
import { Body, Row, Cell } from '../Table';
import Edit from '../Operation/Edit';
import { connect } from 'react-redux';

const createIfNotExists = (operations, month) => (
  operations.find(o => o.monthId === month) || {
    plan: 0,
    fact: 0
  }
)

let IncomeBody = ({
  months,
  categories,
  operations
}) => (

  <Body>
    <Row>
      <Cell></Cell>
      {months.map(() => [
        <Cell>0</Cell>,
        <Cell>0</Cell>
      ])}
    </Row>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell>
          {c.name}
        </Cell>
        {months.map(m => createIfNotExists(operations, m)).map(o => [
          <Cell contentId={o.id} editor={Edit}>
            {o.plan}
          </Cell>,
          <Cell>{o.fact}</Cell>
        ])}
      </Row>
    )}
  </Body>

);

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const sort = (categories) => categories
  .sort((a, b) => a.order > b.order);

const mapStateToProps = (state) => ({
  months: state.months,
  categories: sort(filter(state.categories.list)),
  operations: state.operations
})

IncomeBody = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBody;
