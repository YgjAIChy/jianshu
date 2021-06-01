import React, { Component, Fragment } from 'react'

import { GlobalStyle } from './style.js';
import Header from './common/header/index'
import './statics/iconfont/iconfont.css'
// 引入store
import store from './store/index'
// 引入 Provider
import { Provider } from 'react-redux'





export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
             <Header />  
        </Provider>
   
      </Fragment>
    )
  }
}