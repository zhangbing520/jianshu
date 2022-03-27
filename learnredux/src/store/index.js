/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-14 14:59:59
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-15 00:04:15
 */

import {createStore} from 'redux'
import reducer from './reducer.js'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store


