/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import PivotTable from './PivotTable';

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default class MyApp extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    setInterval( function() {
      this.setState( { counter: (this.state.counter+1) } );
    }.bind(this), 1000);
  }

  render() {
    return (
      <div>
        Welcome to React version { React.version } and live reloading<br/>
      Count: {this.state.counter} seconds

      <p>Using this data:</p>

      <pre>
        { `
          [{ product: 'A', store: '1'},
           {product: 'B', store: '1'},
           {product: 'C', store: '1'},
           {product: 'D', store: '1'},
           {product: 'A', store: '2'},
           {product: 'B', store: '2'},
           {product: 'C', store: '2'}]` }
      </pre>

      <p>And this template</p>
      <pre>
        {`<PivotTable columns="store" rows="product" data={
            [{ product: 'A', store: '1'},
            {product: 'B', store: '1'},
            {product: 'C', store: '1'},
            {product: 'D', store: '1'},
            {product: 'A', store: '2'},
            {product: 'B', store: '2'},
            {product: 'C', store: '2'}]
          }/>`}
      </pre>

      <p>You get this result:</p>

      <PivotTable columns="store" rows="product" data={
          [{ product: 'A', store: '1'},
          {product: 'B', store: '1'},
          {product: 'C', store: '1'},
          {product: 'D', store: '1'},
          {product: 'A', store: '2'},
          {product: 'B', store: '2'},
          {product: 'C', store: '2'}]
        }/>

      <p>And it should look like this table:</p>

        <table border="yes" style={{border: '1px solid black'}}>
          <tr>
            <th></th>
            <th>store 1</th>
            <th>store 2</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>product A</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>product B</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>product C</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>product D</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>4</td>
            <td>3</td>
            <td>7</td>
          </tr>
        </table>
      </div>
    );
  }
}
