/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 14:08:17
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:27:51
 */

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Write extends Component {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login' />
    }



  }
}
const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Write)