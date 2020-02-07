import { fromJS } from 'immutable'
import { createSelector } from 'reselect'
/*
 Action Types
 */

const SHOW_ALL_VISIBLE = 'SHOW_ALL'
const SHOW_AVAILABLE_VISIBLE = 'SHOW_AVAILABLE'
const SHOW_UN_AVAILABLE_VISIBLE = 'SHOW_UN_AVAILABLE'

export const GROUND_SET_SORT_VALUE = 'grounds/action/GROUND_SET_SORT_VALUE '
export const GROUND_SET_SORT_VALUE_SUCCESS = 'grounds/action/GROUND_SET_SORT_VALUE_SUCCESS '
export const GROUND_SET_SORT_VALUE_FAIL = 'grounds/action/GROUND_SET_SORT_VALUE_FAIL '

export const GROUND_SET_SEARCH_DATA = 'grounds/action/GROUND_SET_SEARCH_DATA '
export const GROUND_SET_SEARCH_DATA_SUCCESS = 'grounds/action/GROUND_SET_SEARCH_DATA_SUCCESS '
export const GROUND_SET_SEARCH_DATA_FAIL = 'grounds/action/GROUND_SET_SEARCH_DATA_FAIL '

export const FILTER_SET_VALUE = 'grounds/action/FILTER_SET_VALUE  '
export const FILTER_SET_VALUE_SUCCESS = 'grounds/action/FILTER_SET_VALUE_SUCCESS '
export const FILTER_SET_VALUE_FAIL = 'grounds/action/FILTER_SET_VALUE_FAIL'

export const GROUND_GET_DATA = 'grounds/action/GET_LIST '
export const GROUND_GET_DATA_SUCCESS = 'grounds/action/GET_LIST_SUCCESS'
export const GROUND_GET_DATA_FAIL = 'grounds/action/GET_LIST_FAIL '

export const GROUND_GET_SINGLE = 'grounds/action/GET_SINGLE '
export const GROUND_GET_SINGLE_SUCCESS = 'grounds/action/GET_SINGLE_SUCCESS'
export const GROUND_GET_SINGLE_FAIL = 'grounds/action/GET_SINGLE_FAIL '

export const GROUND_FILTER_DATA = 'grounds/action/GET_FILTER_DATA '
export const GROUND_FILTER_SUCCESS = 'grounds/action/GET_FILTER_SUCCESS'
export const GROUND_FILTER_FAIL = 'grounds/action/GET_FILTER_FAIL '
/*
 Actions
 */

const setSortValue = payload => {
  return {
    type: GROUND_SET_SORT_VALUE,
    payload,
  }
}
const setSortValueSuccess = payload => {
  return {
    type: GROUND_SET_SORT_VALUE_SUCCESS,
    payload,
  }
}

const setSortValueFail = errorMessage => {
  return {
    type: GROUND_SET_SORT_VALUE_FAIL,
    errorMessage,
  }
}
const setSearchValue = value => {
  return {
    type: GROUND_SET_SEARCH_DATA,
    payload: {
      value,
    },
  }
}
const setSearchValueSuccess = payload => {
  return {
    type: GROUND_SET_SEARCH_DATA_SUCCESS,
    payload,
  }
}

const setSearchValueFail = errorMessage => {
  return {
    type: GROUND_SET_SEARCH_DATA_FAIL,
    errorMessage,
  }
}
const setFilterValue = value => {
  return {
    type: FILTER_SET_VALUE,
    payload: {
      value,
    },
  }
}
const setFilterValueSuccess = payload => {
  return {
    type: FILTER_SET_VALUE_SUCCESS,
    payload,
  }
}

const setFilterValueFail = errorMessage => {
  return {
    type: FILTER_SET_VALUE_FAIL,
    errorMessage,
  }
}
const getFilterData = () => {
  return {
    type: GROUND_FILTER_DATA,
  }
}
const getFilterDataSuccess = payload => {
  return {
    type: GROUND_FILTER_SUCCESS,
    payload,
  }
}

const getFilterDataFail = errorMessage => {
  return {
    type: GROUND_FILTER_FAIL,
    errorMessage,
  }
}
const getSingle = id => {
  return {
    type: GROUND_GET_SINGLE,
    payload: {
      id,
    },
  }
}
const getSingleSuccess = payload => {
  return {
    type: GROUND_GET_SINGLE_SUCCESS,
    payload,
  }
}

const getSingleFail = errorMessage => {
  return {
    type: GROUND_GET_SINGLE_FAIL,
    errorMessage,
  }
}
const getList = () => {
  return {
    type: GROUND_GET_DATA,
  }
}
const getListSuccess = payload => {
  return {
    type: GROUND_GET_DATA_SUCCESS,
    payload,
  }
}

const getListFail = errorMessage => {
  return {
    type: GROUND_GET_DATA_FAIL,
    errorMessage,
  }
}
export const actions = {
  getList,
  getListSuccess,
  getListFail,
  getSingle,
  getSingleSuccess,
  getSingleFail,
  getFilterData,
  getFilterDataSuccess,
  getFilterDataFail,
  setFilterValue,
  setFilterValueSuccess,
  setFilterValueFail,
  setSearchValue,
  setSearchValueSuccess,
  setSearchValueFail,
  setSortValue,
  setSortValueSuccess,
  setSortValueSuccess,
}
// selectors

const emptyList = fromJS([])
const emptyObject = fromJS({})

// initialState
export const initialState = fromJS({
  isLoading: false,
  grounds: emptyList,
  errorMessage: '',
  ground: emptyObject,
  visible: SHOW_ALL_VISIBLE,
  filter_value: 0,
  search_value: 'Vietnam',
  sort_value: {
    field: ['title', 'price'],
    order: ['asc'],
  },
})

export const selectGroundState = state => state.groundReducer || initialState

export const selectGrounds = createSelector(selectGroundState, groundsState =>
  groundsState.get('grounds', emptyList).toJS()
)
function groundReducer(state = initialState, action) {
  switch (action.type) {
    case GROUND_GET_DATA:
      return state.set('isLoading', true)
    case GROUND_GET_DATA_SUCCESS: {
      const { payload } = action
      return state.set('grounds', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_GET_DATA_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    case GROUND_GET_SINGLE:
      return state.set('isLoading', true)
    case GROUND_GET_SINGLE_SUCCESS: {
      const { payload } = action
      return state.set('ground', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_GET_SINGLE_FAIL:
      console.log('error', action.errorMessage)

      return state.set('errorMessage', action.errorMessage).set('isLoading', false)
    case GROUND_FILTER_DATA:
      console.log('hello reducer')
      return state.set('isLoading', true)
    case GROUND_FILTER_SUCCESS: {
      const { payload } = action
      console.log(action)
      return state.set('grounds', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_FILTER_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    case FILTER_SET_VALUE:
      return state.set('isLoading', true)
    case FILTER_SET_VALUE_SUCCESS: {
      const { payload } = action
      return state.set('filter_value', fromJS(payload)).set('isLoading', false)
    }
    case FILTER_SET_VALUE_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    case GROUND_SET_SEARCH_DATA:
      return state.set('isLoading', true)
    case GROUND_SET_SEARCH_DATA_SUCCESS: {
      const { payload } = action

      return state.set('search_value', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_SET_SEARCH_DATA_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    case GROUND_SET_SORT_VALUE:
      return state.set('isLoading', true)
    case GROUND_SET_SORT_VALUE_SUCCESS: {
      const { payload } = action

      return state.set('sort_value', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_SET_SORT_VALUE_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)
    default:
      return state
  }
}
export default groundReducer
