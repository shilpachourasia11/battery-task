import React, { Component } from 'react';
// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
var Chart = require('react-d3-core').Chart;
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;
var chartData = require('../data/user.json');
import {Button, Glyphicon, Label} from 'react-bootstrap';

import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { getUserProfile, generateTemperature } from '../actions';


class App extends Component {
  constructor(){
    super();
    this.state = {
      editting: false,
      temp: 0
    }
    this.myTimer = this.myTimer.bind(this)
  }

  componentDidMount(){
    // var myVar = setInterval(this.myTimer, 5000);
  }

  myTimer(){
    var d = new Date();
    console.log("hello")
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.props.generateTemperature({
      temperature:rand,
      themometerId: 1
    })
    this.setState({
      temp: rand
    });
  }

  render() {
    var chartSeries = [
      {
        field: 'age',
        name: 'Temperature',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    }


    return (
      <div>
          <Button>
            <Glyphicon glyph="align-left" />
            Current Temperature
          </Button>
          <h1><Label>{this.state.temp + " Degrees"}</Label></h1>
          <LineChart
            width= {600}
            height= {300}
            data= {chartData}
            chartSeries= {chartSeries}
            x= {x}
          />
      </div>
    );
  }
}


function mapStateToProps({auth, user}) {
  return user.profile?{
      status: auth.status,
      profile: user.profile,
      initialValues: {
        email: user.profile.email,
        firstName: user.profile.name.first,
        lastName: user.profile.name.last
      },
      updateProfileFailMsg: user.updateProfileFailMsg
  }:{
    status: auth.status,
    profile: user.profile
  }
}


export default connect(mapStateToProps, {getUserProfile, generateTemperature})(reduxForm({
  form: 'profileUpdate',
})(App));