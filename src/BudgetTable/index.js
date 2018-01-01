import React, { Component } from 'react';
import Head from './Head';
import IncomeBody from './IncomeBody.container';
import OutgoBody from './OutgoBody.container';
import './index.css';

class BudgetTable extends Component {
  componentDidMount() {
    
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

export default BudgetTable;
