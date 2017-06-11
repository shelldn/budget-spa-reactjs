import React from 'react';
import EditIncomeCategory from './EditIncomeCategory';
import { connect } from 'react-redux';

const EditIncomePlan = ({ id, value, onEdit }) => (
  <td>
    <input type="text" value={value} onChange={e => onEdit(id, e.target.value ? parseInt(e.target.value) : 0)} />
  </td>
)

let IncomeCategory = ({ id, name, operations, onCategoryEdit, onEdit }) => (

  <tr>
    <EditIncomeCategory id={id} name={name} onEdit={onCategoryEdit} />
    {[...operations].map(o => <EditIncomePlan key={o.key} id={o.id} value={o.value} onEdit={onEdit} />)}
  </tr>

);

const filterOperations = (operations, categoryId) => (
  operations.filter(o => o.categoryId === categoryId)
)

function* mapMonthsToOperations(months, operations) {
  for (var i = 0; i < months.length; i++) {
    const op = operations.find(o => o.month === months[i]);
    yield { key: i * 2, id: op ? op.id : -1, value: op ? op.plan : 0 };
    yield { key: i * 2 + 1, id: op ? op.id : -1, value: op ? op.fact : 0 };
  }
}

const mapStateToProps = (state, props) => ({
  operations: mapMonthsToOperations(state.months, filterOperations(state.operations, props.id))
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (id, newValue) => dispatch({
    type: 'EDIT_INCOME_PLAN',
    payload: {
      id,
      newValue
    }
  }),
  onCategoryEdit: (id, newName) => dispatch({
    type: 'budget-io/categories/EDIT',
    payload: {
      id,
      newName
    }
  })
});

IncomeCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeCategory);

export default IncomeCategory;
