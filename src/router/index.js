import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../component/loading/index'
import {Switch, Route} from 'react-router-dom'

// 主页
const Home = Loadable({
  loader: () => import('../pages/home/index'),
  loading: Loading
})

// 关于
const About = Loadable({
  loader: () => import('../pages/about'),
  loading: Loading
})

// 文章
const Article = Loadable({
  loader: () => import('../pages/article'),
  loading: Loading
})

// 动画
const MyMotion = Loadable({
  loader: () => import('../pages/motion'),
  loading: Loading
})

const Routers = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/article" component={Article} />
      <Route path="/myMotion" component={MyMotion} />
    </Switch>
)

export default Routers


