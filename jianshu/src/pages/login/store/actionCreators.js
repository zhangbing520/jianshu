/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 14:10:09
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:25:03
 */

import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data
      if (result) {
        const action = changeLogin()
        dispatch(action)
      } else {
        alert('登录失败')
      }
    })
  }
}

export const logout = () => {
  return {
    type: constants.LOGOUT,
    value: false
  }
}
