import React, { Component } from 'react';
// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
var Chart = require('react-d3-core').Chart;
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;
var chartData = require('../data/user.json');
import {Button, Glyphicon, Label} from 'react-bootstrap';

import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { getAllTemperature, generateTemperature } from '../actions';
import moment from 'moment';

import DateTimePicker from 'react-datetime-picker';

class App extends Component {
  constructor(){
    super();
    this.state = {
      editting: false,
      temp: 0,
      date: new Date()
    }
    this.myTimer = this.myTimer.bind(this)
  }

  componentDidMount(){
    var myVar = setInterval(this.myTimer, 5000);
  }

  myTimer(){
    var d = new Date();
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.props.generateTemperature({
      temperature:rand,
      thermometerId: "1"
    })
    this.setState({
      temp: rand
    });
  }

  getDate = (date) => {
    this.setState({
      date
    });
  }

  getGraph = () => {
    let data = {
      date: this.state.date,
      thermometerId: "1"
    };
    this.props.getAllTemperature(data);
  }

  render() {

    var chartSeries = [
      {
        field: 'temperature',
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
          
          <h1><Label>{"Current Temperature: " + this.state.temp + " Degrees"}</Label></h1>
          <DateTimePicker
            onChange={this.getDate}
            value={this.state.date}
          />
          <br/>
          <Button onClick={this.getGraph}>
            Get Filtered Temperature Chart
          </Button>
          <LineChart
            width= {600}
            height= {300}
            data= {this.props.data.graph}
            chartSeries= {chartSeries}
            x= {x}
          />
      </div>
    );
  }
}


function mapStateToProps({auth, user}) {
  return user.data?{
     data: user.data
  }:{
    data: user
  }
}


export default connect(mapStateToProps, {getAllTemperature, generateTemperature})(reduxForm({
  form: 'profileUpdate',
})(App));