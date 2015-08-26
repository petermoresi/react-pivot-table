/**
 * Copyright (c) 2015, Peter W Moresi
 */

import React from 'react';

/* Write some great components about what data
 * this application displays and how it needs to be
 * organized.
 */
export default class MyApp extends React.Component {

  getInitialState() {
    return {
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
      </div>
    );
  }
}
