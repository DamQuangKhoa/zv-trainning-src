import { fromJS } from 'immutable'
import { createSelector } from 'reselect'
/*
 Action Types
 */
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
      console.log(action)

      return state.set('grounds', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_GET_DATA_FAIL:
      return state.set('errorMessage', action.errorMessage).set('isLoading', false)

    case GROUND_GET_SINGLE:
      return state.set('isLoading', true)
    case GROUND_GET_SINGLE_SUCCESS: {
      const { payload } = action
      console.log(action)
      return state.set('ground', fromJS(payload)).set('isLoading', false)
    }
    case GROUND_GET_SINGLE_FAIL:
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

    default:
      return state
  }
}
export default groundReducer
