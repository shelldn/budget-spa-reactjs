import React from 'react';
import OutgoTotal from './OutgoTotal';
import OutgoCategory from './OutgoCategory';

const OutgoBody = () => (

    <tbody>

      <OutgoTotal />
      <OutgoCategory name="Food" />
      <OutgoCategory name="Car" />
      <OutgoCategory name="Dogs" />

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

export default OutgoBody;
