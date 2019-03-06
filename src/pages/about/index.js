import React, { Component } from 'react'

class About extends Component {


  render() {
    return (
      <h1 onClick={() => {
        this.props.history.goBack()
      }}>about</h1>
    )
  }
}

export default About