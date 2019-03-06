import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MyRouters from './router/index'
import 'reset.css'
import 'flex.css/dist/data-flex.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyRouters />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));



serviceWorker.unregister();
