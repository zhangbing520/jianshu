/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-28 16:50:06
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-30 21:07:25
 */

import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'

const CreateBtn = ({ onClick }) => (
  <button
    className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
    style={{ width: '100%' }}
    onClick={(e) => { onClick() }}
  >
    <Ionicon
      className="rounded-circle"
      fontSize="30px"
      color='#fff'
      icon='ios-add-circle'
    />
    创建一条新的记账记录
  </button>
)

CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CreateBtn
