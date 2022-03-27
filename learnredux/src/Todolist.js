/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-14 15:02:04
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-14 16:34:50
 */

import React from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreateors'
export class Todolist extends React.Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInoutChange = this.handleInoutChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange) // store.subscribe()订阅 store 的改变
  }

  render() {
    return (
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <Input value={this.state.inputValue} onChange={this.handleInoutChange} placeholder="Basic usage" style={{ width: '300px', marginRight: '10px' }} />
        <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInoutChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    console.log('store changed');
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}