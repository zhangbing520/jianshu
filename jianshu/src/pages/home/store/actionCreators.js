/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-26 21:45:35
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-26 23:38:08
 */

import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
  }
}

const addHomeList = (list, nextPage) => {
  return {
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopSHow = (show) => {
  return {
    type: constants.TOGGLE_SCROLL_TOP,
    show
  }
}