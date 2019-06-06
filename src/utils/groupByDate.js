import dateToCalendar from './dateToCalendar'

export default (list, filterBy) =>
  list.filter(filterBy).reduce((r, acc) => {
    const key = dateToCalendar(acc.date)
    const obj = r
    obj[key] = [...(obj[key] || []), acc]
    return obj
  }, {})
