/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-14 15:00:05
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-14 16:30:21
 */

import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes.js'

const initialState = {
  inputValue: '',
  list: []
}

// reducer可以接收 state， 但不能修改 state
// reducer 是一个纯函数（纯函数是指给定固定的输入，就一定会有固定的输出，而且不会有任何副作用）
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
