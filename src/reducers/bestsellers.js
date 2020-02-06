import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// import action type
export const BESTSELLERS_GET_SINGLE = 'bestsellers/action/GET_SINGLE';
export const BESTSELLERS_GET_SINGLE_SUCCESS =
  'bestsellers/action/GET_SINGLE_SUCCESS';
export const BESTSELLERS_GET_SINGLE_FAIL = 'bestsellers/action/GET_SINGLE_FAIL';

export const BESTSELLERS_GET_LIST = 'bestsellers/action/GET_LIST';
export const BESTSELLERS_GET_LIST_SUCCESS =
  'bestsellers/action/GET_LIST_SUCCESS';
export const BESTSELLERS_GET_LIST_FAIL = 'bestsellers/action/GET_LIST_FAIL';

const emptyList = fromJS([]);

// initialState
export const initialState = fromJS({
  isLoading: false,
  bestsellers: emptyList,
  errorMessage: '',
});

// action creator
function getSingle(id) {
  return {
    type: BESTSELLERS_GET_SINGLE,
    payload: {
      id,
    },
  };
}

function getSingleSuccess(payload) {
  return {
    type: BESTSELLERS_GET_SINGLE_SUCCESS,
    payload,
  };
}

function getSingleFail(errorMessage) {
  return {
    type: BESTSELLERS_GET_SINGLE_FAIL,
    errorMessage,
  };
}

function getList(payload) {
  return {
    type: BESTSELLERS_GET_LIST,
    payload,
  };
}

function getListSuccess(payload) {
  return {
    type: BESTSELLERS_GET_LIST_SUCCESS,
    payload,
  };
}

function getListFail(errorMessage) {
  return {
    type: BESTSELLERS_GET_LIST_FAIL,
    errorMessage,
  };
}

export const actions = {
  getSingle,
  getSingleSuccess,
  getSingleFail,
  getList,
  getListSuccess,
  getListFail,
};

// selectors

export const selectBestsellersState = state =>
  state.bestsellers || initialState;

export const selectBestsellers = createSelector(
  selectBestsellersState,
  bestsellersState => bestsellersState.get('bestsellerlist', emptyList).toJS(),
);

// reducer
function bestsellersReducer(state = initialState, action) {
  switch (action.type) {
    case BESTSELLERS_GET_SINGLE:
      return state.set('isLoading', true);
    case BESTSELLERS_GET_SINGLE_SUCCESS: {
      const { payload, id } = action;
      return state
        .setIn(['bestsellers', id], fromJS(payload))
        .set('isLoading', false);
    }
    case BESTSELLERS_GET_SINGLE_FAIL:
      return state
        .set('errorMessage', action.errorMessage)
        .set('isLoading', false);
    case BESTSELLERS_GET_LIST:
      return state.set('isLoading', true);
    case BESTSELLERS_GET_LIST_SUCCESS: {
      const { payload } = action;
      return state
        .set('bestsellerlist', fromJS(payload))
        .set('isLoading', false);
    }
    case BESTSELLERS_GET_LIST_FAIL:
      return state
        .set('errorMessage', action.errorMessage)
        .set('isLoading', false);
    default:
      return state;
  }
}

export default bestsellersReducer;
