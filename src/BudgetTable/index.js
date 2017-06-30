import React from 'react';
import Table from '../Table';
import Head from './Head';
import IncomeBody from './IncomeBody';
import './index.css';

const BudgetTable = () => (
  <Table>
    <Head />
    <IncomeBody />
  </Table>
);

export default BudgetTable;
