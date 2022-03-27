/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-17 12:02:59
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 14:05:53
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img className='pic' alt='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>

          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    getMoreList(page) {
      const action = actionCreators.getMoreList(page)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(List)
