import React from 'react';
import OutgoTotal from './OutgoTotal';
import OutgoCategory from './OutgoCategory';
import AddOutgoCategory from './AddOutgoCategory';
import { connect } from 'react-redux';

let OutgoBody = ({ categories }) => (

  <tbody>

    <OutgoTotal />
    {categories.map(c =>
      <OutgoCategory key={c.id} {...c} />
    )}
    <AddOutgoCategory />

  </tbody>
);

const mapStateToProps = (state) => ({
  categories: state.categories.list
    .filter(c => c.type === 'outgo')
    .sort((a, b) => a.order > b.order)
});

OutgoBody = connect(
  mapStateToProps
)(OutgoBody);

export default OutgoBody;
