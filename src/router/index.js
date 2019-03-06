import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../component/loading/index'
import {Switch, Route} from 'react-router-dom'

const Home = Loadable({
  loader: () => import('../pages/home/index'),
  loading: Loading
})

const About = Loadable({
  loader: () => import('../pages/about'),
  loading: Loading
})

const Routers = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
)

export default Routers


