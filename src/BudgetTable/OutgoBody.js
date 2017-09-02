import React from 'react';
import { Body, Row, Cell } from '../Table';

const createIfNotExists = (operations, categoryId, month) => (
  operations.find(o => o.categoryId === categoryId && o.month === month) || {
    plan: 0,
    fact: 0
  }
)

const OutgoBody = ({
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

        {months.map(m => createIfNotExists(operations, c.id, m)).map(o => [
          <Cell>{o.plan}</Cell>,
          <Cell>{o.fact}</Cell>
        ])}
      </Row>
    )}
  </Body>
);

export default OutgoBody;
