import React from 'react';

const createIfNotExists = (operations, categoryId, month) => (
  operations.find(o => o.categoryId === categoryId && o.month === month) || {
    plan: 0,
    fact: 0
  }
)

const Body = ({
  months,
  categories,
  operations
}) => (

  <tbody>
    <tr>
      <td></td>
      {months.map(() => [
        <td>0</td>,
        <td>0</td>
      ])}
    </tr>
    {categories.map(c => 
      <tr key={c.id}>
        <td>
          {c.name}
        </td>
        {months.map(m => createIfNotExists(operations, c.id, m)).map(o => [
          <td>{o.plan}</td>,
          <td>{o.fact}</td>
        ])}
      </tr>
    )}
  </tbody>

);

export default Body;
