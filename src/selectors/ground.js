import { createSelector } from 'reselect'
import { toJS } from 'immutable'
const getVisible = state => {
  return state.get('visible')
}
const getGround = state => {
  return state.get('grounds').toJS()
}
const getFilterValue = state => state.get('filter_value')

export const getVisibleGround = createSelector([getVisible, getGround], (visibilityFilter, grounds) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return grounds
    case 'SHOW_AVAILABLE':
      return grounds.filter(g => g.available)
    case 'SHOW_UN_AVAILABLE':
      return grounds.filter(g => !g.available)
  }
})
export const getVisibleGroundFilteredByKeyword = createSelector(
  [getVisibleGround, getFilterValue],
  (visibleGround, keyword) => visibleGround.filter(ground => ground.price >= keyword)
)
