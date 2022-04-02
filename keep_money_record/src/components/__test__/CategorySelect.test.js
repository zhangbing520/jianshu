/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-29 17:34:55
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-29 17:37:59
 */

import React from 'react'
import { mount } from 'enzyme'
import CreateSelect from '../CategorySelect'
import Ionicon from 'react-ionicons'

export const categories = [
  {
    id: '1',
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  {
    id: '2',
    name: '理财',
    type: 'income',
    iconName: 'logo-yen'
  },
  {
    id: '2',
    name: '理财',
    type: 'income',
    iconName: 'logo-yen'
  },
]

let props = {
  categories,
  onSelectCategory: jest.fn()
}
