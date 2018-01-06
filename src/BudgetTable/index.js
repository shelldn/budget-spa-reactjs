import React, { Component } from 'react';
import Head from './Head';
import IncomeBody from './IncomeBody.container';
import OutgoBody from './OutgoBody.container';
import { fetchCategories } from '../categories';
import { fetchOperations } from '../operations';
import { connect } from 'react-redux';
import './index.css';

class BudgetTable extends Component {

  componentDidMount() {
    const { id } = this.props;

    this.props.fetchCategories(id);    
    this.props.fetchOperations(id);    
  }

  render() {
    const { id } = this.props;

    return (
      <table className="budget-table">
        <Head />
        <IncomeBody budgetId={id} />
        <OutgoBody budgetId={id} />
      </table>
    );
  }
}

const mapDispatchToProps = ({
  fetchCategories,
  fetchOperations
});

BudgetTable = connect(
  undefined,
  mapDispatchToProps
)(BudgetTable);

export default BudgetTable;
