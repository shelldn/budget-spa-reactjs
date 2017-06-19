import React from 'react';
import Table, { Body, Row } from '../Table';
import './index.css';

const BudgetTable = () => (
  <Table>
    <Body>
      <Row>
        <th>#</th>
        <th>Name</th>
      </Row>
    </Body>
    <Body>
      <Row>
        <td>1</td>
        <td>a</td>
      </Row>
      <Row>
        <td>2</td>
        <td>b</td>
      </Row>
    </Body>
    <Body>
      <Row>
        <td>3</td>
        <td>c</td>
      </Row>
      <Row>
        <td>4</td>
        <td>d</td>
      </Row>
    </Body>
  </Table>
);

export default BudgetTable;
