import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <table>
            <thead>

              {/* Months */}
              <tr>
                <th></th>
                <th colSpan="2">January</th>
                <th colSpan="2">February</th>
                <th colSpan="2">March</th>
                <th colSpan="2">April</th>
                <th colSpan="2">May</th>
                <th colSpan="2">June</th>
                <th colSpan="2">July</th>
                <th colSpan="2">August</th>
                <th colSpan="2">September</th>
                <th colSpan="2">October</th>
                <th colSpan="2">November</th>
                <th colSpan="2">December</th>
              </tr>

              {/* Plan/Fact */}
              <tr>
                <th></th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
                <th>Plan</th>
                <th>Fact</th>
              </tr>

              {/* Total */}
              <tr>
                <th></th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
              </tr>
    
            </thead>

            <tbody>

              {/* Income Total */}
              <tr>
                <th></th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
              </tr>

              {/* Income Category: Salary */}
              <tr>
                <td>Salary</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>

              {/* Add category */}
              <tr>
                <td>Add Category</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              
            </tbody>

            <tbody>

              {/* Outgo Total */}
              <tr>
                <th></th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
                <th>0</th>
              </tr>

              {/* Outgo Category: Food */}
              <tr>
                <td>Food</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>

              {/* Add category */}
              <tr>
                <td>Add Category</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>
        </div>
    );
  }
}

export default App;
