import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BudgetTable from './BudgetTable';
import { fetchCategories } from './categories';
import { fetchOperations } from './operations';
import { connect } from 'react-redux';
import './Budget.css';

class App extends Component {

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    this.props.fetchCategories(id);    
    this.props.fetchOperations(id);    
  }

  componentWillReceiveProps(nextProps) {
    const id = parseInt(nextProps.match.params.id, 10);
    this.props.fetchCategories(id);    
    this.props.fetchOperations(id);    
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);

    return (
      <div>
        <header className="budget">
          <Link className="budget__previous" to={`/budgets/${id - 1}`}>&lt;</Link>
          <h1 className="budget__id">{id}</h1>
          <Link className="budget__next" to={`/budgets/${id + 1}`}>&gt;</Link>
        </header>
        <BudgetTable id={id} />
      </div>
    );
  }
}

const mapDispatchToProps = ({
  fetchCategories,
  fetchOperations
});

App = connect(
  undefined,
  mapDispatchToProps
)(App);

export default App;
