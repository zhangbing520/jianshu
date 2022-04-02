/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-27 22:17:18
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-04-01 22:37:53
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './containers/Home'
import Create from './containers/Create';
import { testCategories, testItems } from './testData';
import { parseToMonthAndYear, flatternArr, padLeft, ID } from './utility';

export const AppContext = React.createContext()



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: flatternArr(testItems),
      categories: flatternArr(testCategories),
      currentDate: parseToMonthAndYear(),
    }

    this.actions = {
      selectNewMonth: (year, month) => {
        let filterItemsByDate = {}
        Object.keys(flatternArr(testItems)).forEach(id => {
          if (flatternArr(testItems)[id].date.includes(`${year}-${padLeft(month)}`)) {
            filterItemsByDate[id] = flatternArr(testItems)[id]
          }
        })
        this.setState({
          items: filterItemsByDate,
          currentDate: {
            year,
            month,
          }
        })
      },

      deleteItem: (item) => {
        delete this.state.items[item.id]
        this.setState({
          items: this.state.items
        })
      },

      createItem: (data, categoryId) => {
        const newId = ID()
        const parseDate = parseToMonthAndYear(data.date)
        data.monthCategory = `${parseDate.year}-${parseDate.month}`
        data.timestamp = new Date(data.date).getTime()
        const newItem = { ...data, cid: categoryId, id: newId }
        this.setState({
          items: { ...this.state.items, [newId]: newItem }
        })
      },

      updateItem: (data, categoryId) => {
        const modifiedItem = {
          ...data,
          cid: categoryId,
          timeStamp: new Date(data.date).getTime()
        }
        this.setState({
          items: {
            ...this.state.items,
            [modifiedItem.id]: modifiedItem
          }
        })
      }
    }

  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        <Router>
          <div className='App'>
            <div className='container pb-5'>
              <Route path='/' exact component={Home} />
              <Route path='/create' exact component={Create} />
              <Route path='/edit/:id' exact component={Create} />
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
