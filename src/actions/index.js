import { SET_SEARCH_VALUE, SET_IS_FETCHING } from '../constants/actions-type';

export const setSearchInputValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });