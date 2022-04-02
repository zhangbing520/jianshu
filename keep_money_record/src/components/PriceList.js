/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-28 10:51:10
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-30 19:22:27
 */

import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'
import { AppContext } from '../App'

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        items.map((item) => (
          <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
            <span className='col-1 badge badge-primary'>
              <Ionicon
                className='rounded-circle'
                fontSize='30px'
                style={{ background: '#007bff', padding: '5px' }}
                icon={item.category.iconName}
              />
            </span>
            <span className='col-5'>
              {item.title}
            </span>
            <span className='col-2 font-weight-bold'>
              {
                (item.category.type === 'income') ? '+' : '-'
              }
              {item.price}元
            </span>
            <span className='col-2'>
              {item.date}
            </span>
            <a className='col-1' onClick={() => { onModifyItem(item) }}>
              <Ionicon
                className='rounded-circle'
                fontSize='30px'
                style={{ background: '#28a745', padding: '5px' }}
                color={'#fff'}
                icon='ios-create-outline'
              />
            </a>
            <a className='col-1' onClick={() => { onDeleteItem(item) }}>
              <Ionicon
                className='rounded-circle'
                fontSize='30px'
                style={{ background: '#dc3545', padding: '5px' }}
                color={'#fff'}
                icon='ios-close'
              />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

PriceList.defaultProps = {
  onModifyItem: () => { }
}

export default PriceList
