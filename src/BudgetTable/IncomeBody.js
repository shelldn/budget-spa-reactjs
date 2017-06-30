import React from 'react';
import { Body, Row, Cell } from '../Table';
import { Plan, Fact } from '../Operation';
import { connect } from 'react-redux';

const createIfNotExists = (operations, month) => (
  operations.find(o => o.monthId === month) || {
    plan: 0,
    fact: 0
  }
)

let IncomeBody = ({
  editId,
  editType,
  months,
  categories,
  operations,
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
        <Cell className="budget-table__cell budget-table__cell--income">{c.name}</Cell>
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
  editId: state.editId.id,
  editType: state.editId.type,
  months: state.months,
  categories: sort(filter(state.categories.list)),
  operations: state.operations
})

const mapDispatchToProps = (dispatch) => ({
  onOperationEdit: (id, type) => dispatch({
    type: 'budget-io/operations/EDIT',
    payload: {
      id,
      type
    }
  })
});

IncomeBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeBody);

export default IncomeBody;
