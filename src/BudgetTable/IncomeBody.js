import React from 'react';
import IncomeTotal from './IncomeTotal';
import IncomeCategory from './IncomeCategory';

const IncomeBody = () => (

  <tbody>

    <IncomeTotal />
    <IncomeCategory name="Salary" />
    <IncomeCategory name="Deposit" />

    {/* Add category */}
    <tr>
      <td>Add Category</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
  </tbody>
);

export default IncomeBody;
