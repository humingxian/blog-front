import React, { Component } from 'react'
import './index.scss'

import { StaggeredMotion, Motion, spring, presets} from 'react-motion'

const arr = [0, 0, 0, 0, 0, 0]

class MyMotion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      pos: {
        x: 250,
        y: 300
      }
    }

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.getStyles = this.getStyles.bind(this)
  };

  componentDidMount(){
    window.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', this.handleMouseMove)
    })

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.handleMouseMove)
    })
  }

  handleMouseMove({pageX: x, pageY: y}) {
    this.setState({
      pos: {x,y}
    })
  }

  handleMouseDown = () => {
    this.setState({open: !this.state.open})
  }

  handleTouchStart = (e) => {
    e.preventDefault()
    this.handleMouseDown()
  }

  getStyles(preStyles) {
    // console.log(preStyles)
    let arr = preStyles.map((_, i) => {
      return i === 0 
      ? this.state.pos
      : {
          x: spring(preStyles[i - 1].x, presets.gentle),
          y: spring(preStyles[i - 1].y, presets.gentle)
        }
    })
    return arr
  }

  render() {
    return (
      <div>
        <div>
          <button
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleTouchStart}>
            Toggle
          </button>
          {/* 要做动画地方用Motion包裹，在spring函数里面传入一个target值 */}
          <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
            {({x}) =>
              // 回调函数里面接受一个参数x
              // `style`
              <div className="demo0">
              {/* 这里通过变化的值，再设置css动画，去时时的渲染元素 */}
                <div className="demo0-block" style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }} />
              </div>
            }
          </Motion>
        </div>
        {/* 动画2 */}
        <div>
          {/* 当要控制一群元素去做动画时，用 StaggeredMotion 包裹起来 内部的回调函数参数就是变化的一群数组 */}
          <StaggeredMotion defaultStyles={arr.map(() => ({x:0,y:0}))} styles={this.getStyles}>
          {/* 回调函数参数接受的是 上面 style 里的数组 */}
            {balls =>
              <div className="demo1">
                {balls.map(({x, y}, i) =>
                  <div
                    key={i}
                    className={`demo1-ball ball-${i}`}
                    style={{
                      // 通过css动画
                      WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: balls.length - i,
                    }} />
                )}
              </div>
            }
          </StaggeredMotion>
        </div>





      </div>
    )
  }
}

export default MyMotion