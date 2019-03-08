import React, { Component } from 'react'

import { Motion, spring, presets } from 'react-motion'

class About extends Component {
  constructor() {
    super()
    this.state = {
      left: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    let targetX = 0
    if(this.state.left === 0) {
      targetX = 200
    } else {
      targetX = 0
    }

    this.setState({
      left: targetX
    })
  }

  componentDidMount() {
    this.clickHandler()
  }

  render() {
    return (
      <div className="container">
        <Motion style={{x: spring(this.state.left, presets.wobbly)}}>
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{transform: `translateX(${interpolatingStyle.x}px)`}} style={{width: '100px', height: '100px', backgroundColor: '#333'}}></div>
            )
          }}
        </Motion>
        <button onClick={this.clickHandler}>run</button>
      </div>
    )
  }
}

export default About