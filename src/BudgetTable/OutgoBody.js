import React from 'react';
import OutgoTotal from './OutgoTotal';
import OutgoCategory from './OutgoCategory';
import AddOutgoCategory from './AddOutgoCategory';
import { connect } from 'react-redux';

let OutgoBody = ({ categories }) => (

  <tbody>

    <OutgoTotal />
    {categories.map(c =>
      <OutgoCategory key={c.id} name={c.name} />
    )}
    <AddOutgoCategory />

  </tbody>
);

const mapStateToProps = (state) => ({
  categories: state.categories.filter(c => c.type === 'outgo')
});

OutgoBody = connect(
  mapStateToProps
)(OutgoBody);

export default OutgoBody;
