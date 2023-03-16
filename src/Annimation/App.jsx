import React, { Component } from 'react';
import './App.css'
import Comp1 from './componenets/Comp1';
import Component2 from './componenets/Component2';

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
