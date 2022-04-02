/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-30 19:28:44
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-30 19:31:26
 */

import React from 'react'
import { AppContext } from './App'

export const withContext = (Component) => {
  return (props) => (
    <AppContext.Consumer>
      {({ state, actions }) => {
        return <Component {...props} data={state} actions={actions} />
      }}
    </AppContext.Consumer>
  )
}