import React from 'react';
import { Body, Row, Cell } from '../Table';
import { connect } from 'react-redux';

let Head = ({ months }) => (

  <Body>
    <Row>
      <Cell />
      {months.map(m => 
        <Cell colSpan={2} key={m}>{m}</Cell>
      )}
    </Row>
    <Row>
      <Cell />
      {months.map(_ => [
        <Cell>Plan</Cell>,
        <Cell>Fact</Cell>
      ])}
    </Row>
  </Body>
)

const mapStateToProps = (state) => ({
  months: state.months
});

Head = connect(
  mapStateToProps
)(Head);

export default Head;
