/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 12:40:15
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 14:02:12
 */

import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DATAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    })
  }
}
