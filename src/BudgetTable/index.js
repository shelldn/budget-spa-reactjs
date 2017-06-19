import React from 'react';
import Table, { Head, Body, Row, Cell } from '../Table';
import './index.css';

const BudgetTable = () => (
  <Table>
    <Head>
      <Row>
        <Cell>#</Cell>
        <Cell>Name</Cell>
        <Cell>!</Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>1</Cell>
        <Cell>a</Cell>
        <Cell>@</Cell>
      </Row>
      <Row>
        <Cell>2</Cell>
        <Cell>b</Cell>
        <Cell>#</Cell>
      </Row>
    </Body>
    <Body>
      <Row>
        <Cell>3</Cell>
        <Cell>c</Cell>
        <Cell>$</Cell>
      </Row>
      <Row>
        <Cell>4</Cell>
        <Cell>d</Cell>
        <Cell>%</Cell>
      </Row>
    </Body>
  </Table>
);

export default BudgetTable;
