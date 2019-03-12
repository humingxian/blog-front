import React, { Component } from 'react'

class Article extends Component{
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    
  }
  componentDidMount() {
    this.myRef.current.focus()
    this.myRef.current.value = 12
  }

  render() {
    console.log(this.myRef)
    return (
      <div>
        <img src={require('../../assert/images/ggx.png')} alt='' />
        <input ref={this.myRef}></input>
      </div>
    )
  }
}

export default Article