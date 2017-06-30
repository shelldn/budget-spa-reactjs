import React from 'react';
import { Body, Row, Cell } from '../Table';
import Category from '../Category';
import { Plan, Fact } from '../Operation';
import { connect } from 'react-redux';

const createIfNotExists = (operations, month) => (
  operations.find(o => o.monthId === month) || {
    plan: 0,
    fact: 0
  }
)

let IncomeBody = ({
  categoryEditId,
  editId,
  editType,
  months,
  categories,
  operations,
  onCategoryEdit,
  onOperationEdit
}) => (

  <Body>
    <Row>
      <Cell className="budget-table__income-total"></Cell>
      {months.map(() => [
        <Cell className="budget-table__income-total">0</Cell>,
        <Cell className="budget-table__income-total">0</Cell>
      ])}
    </Row>
    {categories.map(c => 
      <Row key={c.id}>
        <Cell className="budget-table__cell budget-table__cell--income">
          <Category editId={categoryEditId} id={c.id} name={c.name} onEdit={onCategoryEdit} />
        </Cell>
        {months.map(m => createIfNotExists(operations, m)).map(o => [
          <Cell>
            <Plan id={o.id} editId={editId} editType={editType} value={o.plan} onEdit={onOperationEdit} />
          </Cell>,
          <Cell>
            <Fact id={o.id} editId={editId} editType={editType} value={o.fact} onEdit={onOperationEdit} />
          </Cell>
        ])}
      </Row>
    )}
  </Body>

);

const filter = (categories) => categories
  .filter(c => c.type === 'income');
  
const sort = (categories) => categories
  .sort((a, b) => a.order > b.order);

const mapStateToProps = (state) => ({
  categoryEditId: state.categories.edit.id,
  editId: state.edit.id,
  editType: state.edit.type,
  months: state.months,
  categories: sort(filter(state.categories.list)),
  operations: state.operations
})

const mapDispatchToProps = (dispatch) => ({

  onCategoryEdit: (id, name) => dispatch({
    type: 'budget-io/categories/EDIT',
    payload: {
      id,
      name
    }
  }),

  onOperationEdit: (id, type, value) => dispatch({
    type: 'budget-io/operations/EDIT',
    payload: {
      id,
      type,
      value
    }
  })

});

IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeBody);

export default IncomeBody;
