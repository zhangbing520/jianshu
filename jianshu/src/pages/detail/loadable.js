/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 15:46:04
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-27 15:54:39
 */
import React from 'react'
import Loadable from 'react-loadable'

const LoadbleComponent = Loadable({
  loader: () => import('./index.js'),
  loading() {
    return (
      <div>正在加载</div>
    )
  }
})

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <LoadbleComponent />
