/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-13 14:25:29
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-13 16:03:34
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Todoitem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const {content, test} = this.props
    return (
      <div onClick={this.handleClick}>{test}-{content}</div>
    )
  }

  handleClick() {
    const {handelDelete, index} = this.props
    handelDelete(index)
  }
}

Todoitem.propTypes = {
  content: PropTypes.string,
  handelDelete: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired
}

Todoitem.defaultProps = {
  test: 'hello world'
}
