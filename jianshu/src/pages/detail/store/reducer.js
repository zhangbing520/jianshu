/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 12:40:28
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 13:51:42
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DATAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })

    default:
      return state
  }
}
