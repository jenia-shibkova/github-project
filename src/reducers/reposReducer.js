import { SET_SEARCH_VALUE, SET_IS_FETCHING } from '../constants/actions-type';

const defaultState = {
  items: [],
  isFetching: true,
  searchValue: ''
}

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }  

    default:
      return state;
  }
}

export default reposReducer;
