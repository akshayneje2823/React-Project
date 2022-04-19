import React, { Component } from 'react'
import Navbar from './Navbar'
import Exmaple from './State Example/Exmaple'
import Counter from './State Example/Counter'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Exmaple/>
        <Counter/>
      </div>
    )
  }
}

export default App
