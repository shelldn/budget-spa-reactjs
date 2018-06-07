import React from 'react';
import { connect } from 'react-redux';
import './Head.css';

let Head = ({ months }) => (

  <tbody className="head">
    <tr>
      <td></td>
      {months.map(m => 
        <td colSpan={2} key={m}>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]}</td>
      )}
    </tr>
    <tr>
      <td></td>
      {months.map(_ => [
        <td>Plan</td>,
        <td>Fact</td>
      ])}
    </tr>
  </tbody>
)

const mapStateToProps = (state) => ({
  months: state.months
});

Head = connect(
  mapStateToProps
)(Head);

export default Head;
