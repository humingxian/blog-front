import React, { Component } from 'react'
import './index.scss'

let arr = [0, 0]

class ArticleList extends Component {



  render() {
    return (
      <div className='articleListBox'>
        <div className="articleList">
          {arr.map((value, index) => {
            return (
              <div className="articleItem" data-flex='main:justify cross:center box:first' key={index}>
                <div>
                  <img src={require('../../assert/images/cat.png')} alt=''/>
                </div>
                <div>
                  <p>颤动时间{value}</p>
                  <p>Lorem存有nisl sed的一个伟大的和负担得起的veroeros的过程。然而，NEC，存有普通人。需要营养产品。</p>
                  <span>学习更多</span>
                </div>
              </div>
            )
          })}

          <div className="allBtn">
            <span>查看全部文章</span>
          </div>
        </div>
      </div>
    )
  }
} 

export default ArticleList