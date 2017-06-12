import { connect } from 'react-redux';

export const total = (WrappedComponent, subtype) => {
  const mapStateToProps = (state, props) => {
    const operations = state.operations
      .filter(o => o.month === props.month);

    const byType = (type, operations) => operations.filter(o => state.categories.list.some(c => c.type === type && c.id === o.categoryId));
    const incomes = (o) => byType('income', o);
    const outgoes = (o) => byType('outgo', o);

    const sum = (operations) => operations
      .map(o => o[subtype])
      .reduce((a, b) => a + b, 0);

    return {
      value: sum(incomes(operations)) - sum(outgoes(operations))
    };
  }

  return connect(
    mapStateToProps
  )(WrappedComponent);
}
