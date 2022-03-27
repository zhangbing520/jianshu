/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 14:10:21
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:24:15
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defauleState = fromJS({
  login: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defauleState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case constants.LOGOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}
