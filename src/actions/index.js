import { 
  SET_SEARCH_VALUE, 
  SET_IS_FETCHING_PROFILE,
  SET_IS_FETCHING_REPOS, 
  GET_USER_DATA, 
  GET_USER_REPOS,
  RESET_USER_DATA,
  SET_CURRENT_PAGE
} from '../constants/actions-type';
import { PER_PAGE, BASE_GITHUB_USERS_URL, REQUEST_STATUS_OK } from '../constants';
 
export const setSearchInputValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });

export const setIsFetchingProfile = (bool) => ({ type: SET_IS_FETCHING_PROFILE, payload: bool });

export const setIsFetchingRepos = (bool) => ({ type: SET_IS_FETCHING_REPOS, payload: bool });

export const setUserData = (data) => ({ type: GET_USER_DATA, payload: data });

export const setRepos = (repos) => ({ type: GET_USER_REPOS, payload: repos });

export const resetUserData = () => ({ type: RESET_USER_DATA });

export const getUserData = (username) => async (dispatch) => {
  try {
    dispatch(setIsFetchingProfile(true));

    const response = await fetch(`${BASE_GITHUB_USERS_URL}/${username}`);

    if (response.status === REQUEST_STATUS_OK) {
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

      dispatch(setUserData(payload));
    } 
    
  } catch (e) {
    dispatch(resetUserData);
  }
};

export const getRepos = (username, page = 1) => async (dispatch) => {
  try {
    dispatch(setIsFetchingRepos(true));

    const queryString = `repos?type=all&sort=full_name&per_page=${PER_PAGE}&page=${page}`;
    const response = await fetch(`${BASE_GITHUB_USERS_URL}/${username}/${queryString}`);

    if (response.status === REQUEST_STATUS_OK) {
      const repos = await response.json();
  
      const payload = repos.map((repo) => {
        const { id, name, owner, description } = repo;
        const url = repo.html_url;
  
        return { id, name, url, description, owner };
      }); 
  
      dispatch(setRepos(payload));
    }    
  } catch (e) {
    dispatch(resetUserData);
  }
}