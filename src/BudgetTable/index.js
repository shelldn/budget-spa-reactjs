import React from 'react';
import Head from './Head';
import IncomeBody from './IncomeBody.container';
import OutgoBody from './OutgoBody.container';
import './index.css';

const BudgetTable = ({ id }) => (
  <table className="budget-table">
    <Head />
    <IncomeBody budgetId={id} />
    <OutgoBody budgetId={id} />
  </table>
);

export default BudgetTable;
