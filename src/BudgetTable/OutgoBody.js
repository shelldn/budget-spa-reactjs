import React from 'react';
import OutgoTotal from './OutgoTotal';
import OutgoCategory from './OutgoCategory';
import AddOutgoCategory from './AddOutgoCategory';

const OutgoBody = () => (

    <tbody>

      <OutgoTotal />
      <OutgoCategory name="Food" />
      <OutgoCategory name="Car" />
      <OutgoCategory name="Dogs" />
      <AddOutgoCategory />

    </tbody>
);

export default OutgoBody;
