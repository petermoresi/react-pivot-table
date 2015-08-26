// These steps are designed to test the stores in the CollateralUtility
require('babel/register');
var MyApp = require( '../../src/components/MyApp.js' );
var React = require('react');

/*
 *  Try to make as few step definitions as possible. If you have
 *  a small number of definitions then store them all in a single
 *  file. If that becomes difficult then split it into files in
 *  the best way for your needs.
 */

var myStepDefinitionsWrapper = function () {

  var app,    // reference instance of MyApp
      output; // the result of app.render()

  function assert(should_be_true, message) {
    if (!should_be_true) {
      throw new Error(message);
    }
  }

  this.Given(/^I have the next super cool application/, function (callback) {
    app = new MyApp();
    app.state = app.getInitialState();
    app.setState = function( newState ) {
      app.state = Object.assign(app.state, newState );
    }
    app.componentDidMount();
    callback();
  });

  this.Given(/^I set state:$/, function (newState, callback) {
    // Write code here that turns the phrase above into concrete actions
    app.setState( JSON.parse(newState) );
    //console.log( app.state );
    callback();
  });
  
  this.Then(/^the render should return:$/, function (text, callback) {
    //console.log( "Render at: " + new Date() );
    var output = app.render();
    //console.log( app.state );
    var html = React.renderToStaticMarkup( output );
    //console.log(html);
    assert( html == text, 'Does not match');
    callback();
  });


  // default steps
  this.Given(/^that I want to test my project$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Given(/^I can write a simple list of specs$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });


  this.Then(/^I can use cucumber\-js to get my tests done$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Given(/^I wait (\d+) seconds$/, function (arg1, callback) {
    setTimeout( callback, +arg1*1000 );
  });

}

module.exports = myStepDefinitionsWrapper;
