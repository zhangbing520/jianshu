/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-14 16:17:02
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-14 16:22:02
 */

import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from "./actionTypes"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})