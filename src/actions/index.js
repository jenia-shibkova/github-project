import { SET_SEARCH_VALUE, SET_IS_FETCHING, GET_USER_DATA, RESET_USER_DATA } from '../constants/actions-type';

export const setSearchInputValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });

export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });

export const setUserData = (repos) => ({ type: GET_USER_DATA, payload: repos });

export const resetUserData = () => ({ type: RESET_USER_DATA });

export const getRepos = (username) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
          
    const payload = {
      name: data.name,
      login: data.login,
      avatar: data.avatar_url,
      followers: data.followers,
      following: data.following,
      htmlUrl: data.html_url,
      reposCount: data.public_repos,
    };
    dispatch(setUserData(payload))
  } catch (error) {
    console.log(error);
  }
}