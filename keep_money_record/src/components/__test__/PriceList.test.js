/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-29 13:23:29
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-29 14:02:06
 */
import React from 'react'
import Ionicon from 'react-ionicons'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'
import { items, categories } from '../../containers/Home'

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid]
  return item
})

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
}

let wrapper
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props} />)
  })

  it('should render the component to match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render corrent price item list', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
  })

  it('should render correct icon and price for each item', () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)
  })

  it('should trigger the correct callback', () => {
    const firstItem = wrapper.find('.list-group-item').first()
    firstItem.find('a').first().simulate('click')
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
  })
})

