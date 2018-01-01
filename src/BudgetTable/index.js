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
    this.props.fetchCategories(this.props.match.params.id);    
    this.props.fetchOperations(this.props.match.params.id);    
  }

  render() {
    return (
      <table className="budget-table">
        <Head />
        <IncomeBody />
        <OutgoBody />
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
