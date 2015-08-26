import React from 'react';
import pivot from 'pivot-crossfilter';
import crossfilter from 'crossfilter';


let result, rows, columns;

/* Pivot table implemented completely with props */
export default class PivotTable extends React.Component {

  constructor(props){
    super(props);
    result = pivot( crossfilter(props.data), props.rows, props.columns );
    rows = Object.keys(result[props.rows]);
    columns = Object.keys(result[props.columns]);
    console.log(result);
  }

  componentWillMount() {

  }

  render() {

    var first = (<tr>
      <th></th>
      {columns.map( (n, i) => <th>{ this.props.columns + ' ' + n }</th>)}
      <th>Total</th>
      </tr>);

      var middle = rows.map((row, i) => {
        return (<tr>
          <td>{ this.props.rows + ' ' + row }</td>
          {columns.map( (col, i) =>
            <td>
            { result[this.props.rows + '|' + this.props.columns][ row + '|' + col ] ?
            result[this.props.rows + '|' + this.props.columns][ row + '|' + col ] : 0
             }
          </td>)}
            <td>
              { result[this.props.rows][row] }
            </td>
            </tr>)
          });

          var last = (<tr>
          <td>Totals</td>
            {columns.map( (col, i) =>
              <td>
              { result[this.props.columns][ col ] }
            </td>)}
          <td>
            {columns.reduce(function(a, b) { return result[this.props.columns][a] + result[this.props.columns][b]; }.bind(this))}
          </td>
          </tr>)


          return (<div>
            <table border="yes" style={{border: '1px solid black'}}>
            {first}
            {middle}
            {last}
            </table>
            </div>);
          }

        }
