/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-16 16:31:12
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-26 23:44:23
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })

    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })

    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)

    default:
      return state
  }
}
