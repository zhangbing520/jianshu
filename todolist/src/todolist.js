/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-13 13:42:39
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-14 09:32:03
 */

import React, { Component, Fragment } from 'react'
import './style.css'
import Todoitem from './todoitem'
import axios from 'axios'


export default class Todolist extends Component {

  // 当组件的 state、props 发生改变，render 函数就会重新执行

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handelItemDelete = this.handelItemDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get('/api/todolist').then(() => {alert('succ')}).catch(() => {alert('err')})
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <label htmlFor='inserArea'>输入内容</label>
        <input ref={(input) => { this.input = input }} id='inserArea' className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.handleBtnClick}>提交</button>
        {/* <ul>
          {
            this.state.list.map((item, index) =>
              item !== '' ? <li key={index} onClick={this.handelItemDelete.bind(this, index)}>{item}</li> : null
            )
          }
        </ul> */}

        <ul ref={(ul) => { this.ul = ul }}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {item !== '' ? <Todoitem content={item} index={index} handelDelete={this.handelItemDelete} /> : null}
        </div>)
    })
  }

  handleInputChange(e) {
    // const value = e.target.value
    const value = this.input.value
    this.setState(() => ({ inputValue: value }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { console.log(this.ul.querySelectorAll('div').length) })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })

    // console.log(this.ul.querySelectorAll('div').length) // setState 是 异步函数
  }

  handelItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
    // this.setState({
    //   list: newList
    // })
  }
}
