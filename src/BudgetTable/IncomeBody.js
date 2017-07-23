import React from 'react';
import { Body, Row, Cell } from '../Table';
import { Edit } from '../Operation';

const createIfNotExists = (operations, month) => (
  operations.find(o => o.monthId === month) || {
    plan: 0,
    fact: 0
  }
)

const IncomeBody = ({
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
          <Cell
            editor={<Edit id={o.id} />}
            value={o.plan}
          >
            {o.plan}
          </Cell>,
          <Cell>{o.fact}</Cell>
        ])}
      </Row>
    )}
  </Body>

);

export default IncomeBody;
