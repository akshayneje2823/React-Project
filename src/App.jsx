import React, { Component } from 'react';
import './App.css'
import Comp1 from './Annimation/componenets/Comp1';
import Component2 from './Annimation/componenets/Component2';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Comp1/>
        <Component2/>
      </div>
    )
  }
}
