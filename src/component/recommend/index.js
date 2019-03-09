import React, { Component } from 'react'

import './index.scss'

class Recommend extends Component {


  render() {
    return (
      <div className="recommend">
        <h2>超级干货</h2>
        <div data-flex='main:justify cross:center'>
          <div data-flex='dir:top main:justify box:last'>
            <div>
              <p>linear-gradient css3渐变</p>
              <p>
                我觉得CSS3 Backgrounds比较厉害的一个地方就是支持多背景，也就是背景图片个数可以无限累加，
                正好CSS3的gradient渐变性质是background-image，于是，我们可以实现任意数量渐变背景图的
                叠加效果。甚至，理论上，任意彩色jpg图片都是可以使用CSS3渐变背景实现的。
              </p>
            </div>
            <p><span className='btn'>学习更多</span></p>
          </div>
          <span className='line'></span>
          <div data-flex='dir:top main:justify box:last'>
            <div>
              <p>linear-gradient css3渐变</p>
              <p>
                我觉得CSS3 Backgrounds比较厉害的一个地方就是支持多背景.
              </p>
            </div>
            <p><span className='btn'>学习更多</span></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Recommend