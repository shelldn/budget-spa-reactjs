import React from 'react';
import IncomeTotal from './IncomeTotal';
import IncomeCategory from './IncomeCategory';
import AddIncomeCategory from './AddIncomeCategory';

const IncomeBody = () => (

  <tbody>

    <IncomeTotal />
    <IncomeCategory name="Salary" />
    <IncomeCategory name="Deposit" />
    <AddIncomeCategory />

  </tbody>
);

export default IncomeBody;
