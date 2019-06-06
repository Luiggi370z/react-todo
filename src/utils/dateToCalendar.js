import { format, isToday, isTomorrow, isThisWeek, isThisYear } from 'date-fns'

export default date => {
  if (isToday(date)) return 'Today'
  if (isTomorrow(date)) return 'Tomorrow'
  if (isThisWeek(date)) return format(date, 'dddd')
  return format(date, `MMM Do${!isThisYear(date) ? ', YYYY' : ''}`)
}
