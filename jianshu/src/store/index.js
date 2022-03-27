/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-16 16:29:48
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-16 20:36:33
 */

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
