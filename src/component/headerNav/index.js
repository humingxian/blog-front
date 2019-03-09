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
      <div className='headerNavBox'>
        <div className="headerNav">123</div>
      </div>
    )
  }
}

export default HeaderNav
