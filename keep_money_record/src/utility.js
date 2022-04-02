/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2022-03-28 14:57:44
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-03-30 21:25:15
 */

export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_OUTCOME = 'outcome'
export const TYPE_INCOME = 'income'

export const padLeft = (n) => (
  n < 10 ? "0" + n : n
)

export const range = (size, startAt = 0) => {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr.push(startAt + i)
  }
  return arr
}

export const parseToMonthAndYear = (str) => {
  const date = str ? new Date(str) : new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  }
}

export const isValidDate = (dateString) => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;  // Invalid format
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return false; // Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}

export const flatternArr = (arr) => {
  return arr.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})
}

export const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

export const Colors = {
  blue: '#347eff',
  deepBlue: '#61dafb',
  green: '#28a745',
  red: '#dc3545',
  gray: '#555',
  lightGray: '#efefef',
  white: '#fff',
}
