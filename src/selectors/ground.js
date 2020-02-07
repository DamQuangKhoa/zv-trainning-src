import { createSelector } from 'reselect'
import { orderBy } from 'lodash'
const getVisible = state => {
  return state.get('visible')
}
const getGround = state => {
  return state.get('grounds').toJS()
}
const getFilterValue = state => {
  return state.get('filter_value')
}

const getSearchValue = state => {
  return state.get('search_value')
}
const getSortValue = state => {
  return state.get('sort_value')
}
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
  (visibleGround, keyword) => {
    return visibleGround.filter(ground => ground.price >= keyword)
  }
)

export const getVisibleGroundSearchByKeyword = createSelector(
  [getVisibleGround, getSearchValue],
  (visibleGround, keyword) => {
    return visibleGround.filter(ground => ground.title.includes(keyword))
  }
)
export const getVisibleGroundSortByKeyword = createSelector(
  [getVisibleGround, getSortValue],
  (visibleGround, keyword) => {
    let result = orderBy(visibleGround, keyword.toJS().field, keyword.toJS().order)
    return visibleGround.filter(ground => ground.title.includes(keyword))
  }
)
