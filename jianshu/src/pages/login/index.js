/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 14:08:17
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:14:42
 */

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginBox, LoginWrapper, Input, Button } from './style'
import { actionCreators } from './store'


class Login extends Component {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input) => this.account = input} />
            <Input placeholder='密码' type='password' innerRef={(input) => this.password = input} />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
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
    login(accountElem, passwordElem) {
      console.log(accountElem.value);
      console.log(passwordElem.value);
      const action = actionCreators.login(accountElem.value, passwordElem.value)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)