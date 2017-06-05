import React from 'react';
import Total from './Total';

const Head = () => (

  <thead>

    {/* Months */}
    <tr>
      <th></th>
      <th colSpan="2">January</th>
      <th colSpan="2">February</th>
      <th colSpan="2">March</th>
      <th colSpan="2">April</th>
      <th colSpan="2">May</th>
      <th colSpan="2">June</th>
      <th colSpan="2">July</th>
      <th colSpan="2">August</th>
      <th colSpan="2">September</th>
      <th colSpan="2">October</th>
      <th colSpan="2">November</th>
      <th colSpan="2">December</th>
    </tr>

    {/* Plan/Fact */}
    <tr>
      <th></th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
      <th>Plan</th>
      <th>Fact</th>
    </tr>

    <Total />

  </thead>

);

export default Head;
