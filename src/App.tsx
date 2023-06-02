import React, { Component } from 'react';
import './style.css';
import Count from './components/Count';

export default class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
