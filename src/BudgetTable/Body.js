import React from 'react';
import DisplayCategory from './DisplayCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import edit from '../operations/edit';
import AddPlan from './AddPlan.container';
import AddFact from './AddFact.container';
import {
  InitOperation,
  EditOperationModel,
  EditPlanModel, EditFactModel,
  InitPlan,
  InitFact
} from '../operations';
import './Operation.css';
import './Totals.css';

const sum = (s) => (operations, month) => {

  const addModels = {
    plan: InitPlan,
    fact: InitFact
  };

  const editModels = {
    plan: EditPlanModel,
    fact: EditFactModel
  };

  return operations
    .filter(o => o.month === month)
    .map(o => (o[s] instanceof addModels[s]) || (o[s] instanceof editModels[s]) ? o[s].value : o[s])
    .reduce((a, b) => a + b, 0);
};

export const getTotals = (operations, months) => {

  const totals = {};

  months.forEach(m => {
    totals[m] = {
      plan: sum('plan')(operations, m),
      fact: sum('fact')(operations, m)
    };
  });

  return totals;
};

const formatMoney = (amount) => amount.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Body = ({
  budgetId,
  type,
  months,
  categories,
  category,
  operations,
  totals,
  addCategory,
  addCategoryCommit,
  editCategory,
  editCategoryCommit,
  deleteCategory,
  addPlan,
  addFact,
  editPlan,
  editFact,
  editPlanCommit,
  editFactCommit
}) => (

  <tbody>
    <tr className={`totals totals--${type}`}>
      <td></td>
      {months.map(m => [
        <td>{formatMoney(totals[m].plan)}</td>,
        <td>{formatMoney(totals[m].fact)}</td>,
      ])}
    </tr>
    {categories.map(c => 
      <tr key={c.id}>
        <td>
          {c.isEditing
              ? <EditCategory {...c} onSubmit={editCategoryCommit} />
              : <DisplayCategory {...c} editCategory={editCategory} deleteCategory={deleteCategory} />}
            </td>

            {months.map(m => {
              const operation = operations
                .find(o => o.categoryId === c.id && o.month === m);

              if (operation instanceof InitOperation) {
                return [
                  (operation.plan instanceof InitPlan
                    ? <td>
                      <AddPlan
                        id={budgetId}
                        categoryId={c.id}
                        month={m}
                        value={operation.plan.value}
                      />
                    </td>
                    : <td onDoubleClick={() => addPlan(c.id, m)}>0</td>),

                  (operation.fact instanceof InitFact
                    ? <td>
                      <AddFact
                        id={budgetId}
                        categoryId={c.id}                      
                        month={m}
                        value={operation.fact.value}
                      />
                    </td>
                    : <td onDoubleClick={() => addFact(c.id, m)}>0</td>)
                ];
              }

              else if (operation instanceof EditOperationModel)
                return edit(
                  operation,
                  editPlan,
                  editFact,
                  editPlanCommit,
                  editFactCommit
                );


              else if (operation == null)
                return [
                  <td className="operation-plan operation-plan--empty" onDoubleClick={() => addPlan(c.id, m)}>{formatMoney(0)}</td>,
                  <td className="operation-fact operation-fact--empty" onDoubleClick={() => addFact(c.id, m)}>{formatMoney(0)}</td>
                ];

              else return [
                <td className={`operation-plan${operation.plan === 0 ? ' operation-plan--empty' : ''}`} onDoubleClick={() => editPlan(operation)}>{formatMoney(operation.plan)}</td>,
                <td className={`operation-fact${operation.fact === 0 ? ' operation-fact--empty' : ''}`} onDoubleClick={() => editFact(operation)}>{formatMoney(operation.fact)}</td>
              ];
            })}
          </tr>
    )}
    <tr>
      <td>
        {category
            ? <AddCategory onSubmit={name => addCategoryCommit(budgetId, type, name)} />
            : <a onClick={() => addCategory(type)}>Add category</a>}
          </td>
          {months.map(m => [
            <td></td>,
            <td></td>
          ])}
        </tr>
      </tbody>

);

export default Body;
