import React from 'react';
import IncomeTotal from './IncomeTotal';
import IncomeCategory from './IncomeCategory';
import AddIncomeCategory from './AddIncomeCategory';
import { connect } from 'react-redux';

let IncomeBody = ({ categoryToAdd, categories, addCategory }) => (

  <tbody>

    <IncomeTotal />
    {categories.map(c =>
      <IncomeCategory key={c.id} {...c} />
    )}
    <AddIncomeCategory categoryToAdd={categoryToAdd} onClick={addCategory} />

  </tbody>
);

const mapStateToProps = (state) => ({
  categories: state.categories.list
    .filter(c => c.type === 'income')
    .sort((a, b) => a.order > b.order),

  categoryToAdd: state.categories.add
})

const mapDispatchToProps = (dispatch) => ({
  addCategory: () => dispatch({
    type: 'budget-io/categories/ADD',
    payload: {
      name: ''
    }
  })
});

IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeBody);

export default IncomeBody;
