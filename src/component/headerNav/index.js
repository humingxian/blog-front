import React, { Component } from 'react'
import './index.scss'

class HeaderNav extends Component {

  constructor(props) {
    super(props)


    this.goAbout = this.goAbout.bind(this)
  }

  goAbout() {
    this.props.props.history.push({
      pathname: '/about',
      params: {
        a: 1,
        b: 2
      }
    })
    // console.log(this.props)
  }


  render() {
    return (
      <div className='headerNav'>
        <h1 onClick={this.goAbout}>会当凌绝顶，一览众山小</h1>
      </div>
    )
  }
}

export default HeaderNav
