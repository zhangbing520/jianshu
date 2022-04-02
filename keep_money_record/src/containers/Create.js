/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-29 17:14:53
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-04-01 21:25:14
 */

import React from 'react'
import { withRouter } from 'react-router-dom'
import PriceForm from '../components/PriceForm'
import { withContext } from '../withContext'
import { Tabs, Tab } from '../components/Tabs'
import { TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import CategorySelect from '../components/CategorySelect'

const tabsText = [TYPE_OUTCOME, TYPE_INCOME]

class Create extends React.Component {

  constructor(props) {
    super(props)
    const { id } = props.match.params
    const { categories, items } = props.data
    this.state = {
      selectedTab: (id && items[id]) ? categories[items[id].cid].type : TYPE_OUTCOME,
      selectedCategory: (id && items[id]) ? categories[items[id].cid] : null,
      validationPassed: true,
    }
  }

  selectCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  tabChange = (index) => {
    this.setState({
      selectedTab: tabsText[index]
    })
  }

  formSubmit = (data, isEditMode) => {
    // 没有选择category的时候不能提交成功
    if (!this.state.selectedCategory) {
      this.setState({
        validationPassed: false
      })
      return
    }
    if (!isEditMode) {
      // create
      console.log('enter create')
      this.props.actions.createItem(data, this.state.selectedCategory.id)
    } else {
      // update 
      console.log('enter update')
      this.props.actions.updateItem(data, this.state.selectedCategory.id)
    }
    this.props.history.push('/')
  }

  cancelSubmit = () => {
    this.props.history.push('/')
  }

  render() {
    const { data } = this.props
    const { items, categories } = data
    const { id } = this.props.match.params
    console.log('routeId:', id)
    const editItem = (id && items[id]) ? items[id] : {}
    console.log('editItem:', editItem)
    const { selectedTab, selectedCategory } = this.state
    const filterCategories = Object.keys(categories).filter(id => {
      return categories[id].type === selectedTab
    }).map(id => categories[id])
    const tabIndex = tabsText.findIndex(text => text === selectedTab)
    console.log(filterCategories)
    return (
      <React.Fragment>
        <div className="create-page py-3 px-3 rounded mt-3" style={{ background: '#fff' }}>
          <Tabs activeIndex={tabIndex} onTabChange={this.tabChange}>
            <Tab>支出</Tab>
            <Tab>收入</Tab>
          </Tabs>
          <CategorySelect categories={filterCategories} selectedCategory={selectedCategory} onSelectCategory={this.selectCategory} />
          <PriceForm item={editItem} onFormSubmit={this.formSubmit} onCancelSubmit={this.cancelSubmit} />
        </div>

      </React.Fragment>
    )
  }
}

export default withRouter(withContext(Create))