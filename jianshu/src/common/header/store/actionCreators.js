/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-16 19:23:31
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:19:35
 */

import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (value) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(value),
  totalPage: Math.ceil(value.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})


export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch((err) => { console.log(err) })
  }
}

export const mouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}

export const mouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  }
}

export const changePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page
  }
}


