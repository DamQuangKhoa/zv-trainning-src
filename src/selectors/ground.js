import { createSelector } from 'reselect'

const getVisible = state => state.visible
const getGround = state => state.ground
const getFilterValue = state => state.keyword

export const getVisibleGround = createSelector([getVisible, getGround], (value, grounds) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return ground
    case 'SHOW_AVAILABLE':
      return ground.filter(g => g.available)
    case 'SHOW_UN_AVAILABLE':
      return todos.filter(g => !g.available)
  }
})
const getVisibleTodosFilteredByKeyword = createSelector(
  [ getVisibleTodos, getKeyword ],
  (visibleTodos, keyword) => visibleTodos.filter(
    todo => todo.text.includes(keyword)
  )
)
export const getFilterGround = createSelector([getGround, getFilterValue], (grounds, keyword) =>
  grounds.filter(g => g.price >= keyword)
)
