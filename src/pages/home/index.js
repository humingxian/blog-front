import React, { Component } from 'react'
import './index.scss'

import Banner from './banner/index'
import Recommend from './recommend/index'
import ArticleList from './articleItem'
import ContactMe from './contactMe'

class Home extends Component {

  constructor(){
    super()
    this.state = {

    }

  }

  componentDidMount() {


  }


  render() {
    return (
      <div className="homePage">
        <h1>会当凌绝顶，一览众山小</h1>
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