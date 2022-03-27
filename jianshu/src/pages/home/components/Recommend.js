/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-17 12:03:28
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-26 15:19:02
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)