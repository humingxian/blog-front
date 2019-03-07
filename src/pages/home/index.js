import React, { Component } from 'react'
import './index.scss'

import HeaderNav from '../../component/headerNav'
import Banner from '../../component/banner/index'
import Recommend from '../../component/recommend/index'
import ArticleList from '../../component/articleItem'
import ContactMe from '../../component/contactMe'

class Home extends Component {

  constructor(){
    super()
    this.state = {

    }

  }

  componentDidMount() {
    // window.go = this.props.history

  }


  render() {
    return (
      <div className="homePage">
        <HeaderNav props={{...this.props}} />
        <Banner />
        <div style={{borderBottom: '2px solid #ccc'}}>
          <Recommend />
        </div>
        <ArticleList />
        <ContactMe />
      </div>
    )
  }

}


export default Home