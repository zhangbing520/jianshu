/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 22:17:18
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-04-01 22:44:34
 */
import React from 'react';
import { withRouter } from 'react-router-dom'
import CreateBtn from '../components/CreateBtn';
import MonthPicker from '../components/MonthPicker';
import PriceList from '../components/PriceList';
import TotalPrice from '../components/TotalPrice';
import ViewTab from '../components/ViewTab';
import PieChart from '../components/PieChart'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToMonthAndYear, padLeft } from '../utility';
import { withContext } from '../withContext';

const generateChartDataByCategory = (items, type = TYPE_OUTCOME) => {
  let categoryMap = {}
  items.filter(item => item.category.type === type).forEach((item) => {
    if (categoryMap[item.cid]) {
      categoryMap[item.cid].value += (item.price * 1)
      categoryMap[item.cid].items = [...categoryMap[item.cid].items, item.id]
    } else {
      categoryMap[item.cid] = {
        category: item.category,
        value: item.price * 1,
        items: [item.id]
      }
    }
  })
  return Object.keys(categoryMap).map(mapKey => ({ ...categoryMap[mapKey], name: categoryMap[mapKey].category.name }))
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabView: LIST_VIEW
    }
  }

  changeView = (view) => {
    this.setState({
      tabView: view
    })
  }

  changeDate = (year, month) => {
    this.props.actions.selectNewMonth(year, month)
  }

  createItem = () => {
    this.props.history.push('/create')
  }

  deleteItem = (deletedItem) => {
    this.props.actions.deleteItem(deletedItem)
  }

  modifyItem = (modifiedItem) => {
    this.props.history.push(`/edit/${modifiedItem.id}`)
  }

  render() {
    const { tabView } = this.state
    const { items, categories, currentDate } = this.props.data

    let totalIncome = 0;
    let totalOutcome = 0;

    const itemsWithCategory = Object.keys(items).map(id => {
      items[id].category = categories[items[id].cid]
      return items[id]
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })

    console.log('itemsWithCategory:', itemsWithCategory)

    // 计算收入和支出
    itemsWithCategory.forEach((item) => {
      if (item.category.type === TYPE_INCOME) {
        totalIncome += item.price
      } else {
        totalOutcome += item.price
      }
    })

    // piechart 所需要传入的数据
    const chartOutcomDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_OUTCOME)
    const chartIncomeDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_INCOME)


    return (
      <React.Fragment>
        <header className='App-header'>
          <div className='row mb-5'>
            <div className='col'>
              <MonthPicker year={currentDate.year} month={currentDate.month} onChange={this.changeDate} />
            </div>
            <div className='col'>
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>

        <div className='content-area py-3 px-3'>
          <ViewTab activeTab={tabView} onTabChange={this.changeView} />
          <CreateBtn onClick={this.createItem} />
          {
            tabView === LIST_VIEW &&
            <PriceList items={itemsWithCategory} onModifyItem={this.modifyItem} onDeleteItem={this.deleteItem} />
          }
          {
            tabView === CHART_VIEW &&
            <React.Fragment>
              <PieChart title="本月支出" categoryData={chartOutcomDataByCategory} />
              <PieChart title="本月收入" categoryData={chartIncomeDataByCategory} />
            </React.Fragment>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withContext(Home));
