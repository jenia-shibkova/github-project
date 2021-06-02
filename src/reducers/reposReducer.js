import { 
  SET_SEARCH_VALUE, 
  SET_IS_FETCHING_PROFILE, 
  SET_IS_FETCHING_REPOS,
  GET_USER_DATA, 
  GET_USER_REPOS, 
  RESET_USER_DATA,
  SET_CURRENT_PAGE 
} from '../constants/actions-type';

const defaultState = {
  userData: {},
  repos: [],  
  isFetchingProfile: false,
  isFetchingRepos: false,
  searchValue: '',
  currentPage: 1,
};

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case SET_IS_FETCHING_PROFILE:
      return {
        ...state,
        isFetchingProfile: action.payload
      } 
    case SET_IS_FETCHING_REPOS:
      return {
        ...state,
        isFetchingRepos: action.payload
      }   
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isFetchingProfile: false
      }
    case GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        isFetchingRepos: false
      }     
    case RESET_USER_DATA:
      return {
        ...state,
        userData: {},
        repos: [],
        isFetchingProfile: false,
        isFetchingRepos: false
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }

    default:
      return state;
  }
};

export default reposReducer;
