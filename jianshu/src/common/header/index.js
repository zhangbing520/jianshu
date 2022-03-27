/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-16 09:23:11
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:29:36
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { toJS } from 'immutable'




class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to='/login'>
                <NavItem className='right'>登录</NavItem>
              </Link>
          }
          <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</span>
            {this.getListArea()}
          </SearchWrapper>

        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'><span className="iconfont">&#xe615;</span>写文章</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea = () => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList = list.toJS()
    const pageList = []

    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => this.spinIcon = icon} className='iconfont spin'>&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },

    handleMouseEnter() {
      const action = actionCreators.mouseEnter()
      dispatch(action)
    },

    handleMouseLeave() {
      const action = actionCreators.mouseLeave()
      dispatch(action)
    },

    logout() {
      const action = loginActionCreators.logout()
      dispatch(action)
    },

    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      let rotateAngle = (originAngle + 360).toString() + 'deg'
      spin.style.transform = `rotate(${rotateAngle})`

      if (page < totalPage) {
        const action = actionCreators.changePage(page + 1)
        dispatch(action)

      } else {
        const action = actionCreators.changePage(1)
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
