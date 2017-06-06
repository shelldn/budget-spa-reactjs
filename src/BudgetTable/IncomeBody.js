import React from 'react';
import IncomeTotal from './IncomeTotal';
import IncomeCategory from './IncomeCategory';
import AddIncomeCategory from './AddIncomeCategory';
import { connect } from 'react-redux';

let IncomeBody = ({ categories }) => (

  <tbody>

    <IncomeTotal />
    {categories.map(c =>
      <IncomeCategory key={c.id} name={c.name} />
    )}
    <AddIncomeCategory />

  </tbody>
);

const mapStateToProps = (state) => ({
  categories: state.categories
    .filter(c => c.type === 'income')
    .sort((a, b) => a.order > b.order)
})

IncomeBody = connect(
  mapStateToProps
)(IncomeBody);

export default IncomeBody;
