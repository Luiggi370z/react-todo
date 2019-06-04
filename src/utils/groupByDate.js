import dateToCalendar from './dateToCalendar'

export default (list, filterBy) =>
  list.filter(filterBy).reduce((r, acc) => {
    const key = dateToCalendar(acc.date)
    r[key] = [...(r[key] || []), acc]
    return r
  }, {})
