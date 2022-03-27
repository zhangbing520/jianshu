/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-17 11:47:18
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:53:24
 */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      const action = actionCreators.getDetail(id)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
