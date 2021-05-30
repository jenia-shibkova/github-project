import { SET_SEARCH_VALUE, SET_IS_FETCHING, GET_USER_DATA } from '../constants/actions-type';

const defaultState = {
  userData: {},
  items: [],  
  isFetching: false,
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
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isFetching: false
    }   

    default:
      return state;
  }
}

export default reposReducer;
