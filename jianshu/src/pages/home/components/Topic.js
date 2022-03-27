/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-17 12:03:09
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-17 12:49:14
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) =>
          (
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' alt='pic' src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
          )
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps)(Topic)