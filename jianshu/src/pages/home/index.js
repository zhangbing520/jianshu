/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-17 11:45:58
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-26 23:43:58
 */

import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='banner' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      dispatch(action)
    },
    changeScrollTopShow() {
      if(document.documentElement.scrollTop > 100) {
        const action = actionCreators.toggleTopSHow(true)
        dispatch(action)
      } else {
        const action = actionCreators.toggleTopSHow(false)
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
