import React, { Component } from 'react';
import { Spring  } from 'react-spring';

class Component2 extends Component {
  render() {
    return (
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config={{decay:100,duration:100}}>
        {
          props =>(
            <div style={props}>
              <div style={c2Style}>
                <h1>Componenet2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta libero iure, delectus beatae porro autem natus sunt corporis vel exercitationem provident sed, expedita quod dolorem ullam ex! Facilis, minima.</p>
              </div>
            </div>
          )
        }
      </Spring>
    )
  }
}

const c2Style = {
  background: 'slatelblue',
  color: 'white',
  padding: '1.5rem'

}
export default Component2