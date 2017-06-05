import React from 'react';
import Head from './Head';
import IncomeBody from './IncomeBody';
import OutgoBody from './OutgoBody';

const BudgetTable = () => (
  <table className="budget-table">
    <Head />
    <IncomeBody />
    <OutgoBody />
  </table>
);

export default BudgetTable;
