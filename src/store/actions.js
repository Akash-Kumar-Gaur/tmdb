import {getRatedMovies, getSearchResult, getUpcomingMovies} from '../api/tmdb';
import {RATED_MOVIES, SEARCHED_MOVIES, UPCOMING_MOVIES} from './actionTypes';

export const getRatedMoviesAction = () => {
  return async dispatch => {
    const response = await getRatedMovies();
    dispatch({
      type: RATED_MOVIES,
      payload: response.results,
    });
  };
};

export const getUpcomingMoviesAction = () => {
  return async dispatch => {
    const response = await getUpcomingMovies();
    dispatch({
      type: UPCOMING_MOVIES,
      payload: response.results,
    });
  };
};

export const getSearchedMovieAction = (searchText = '') => {
  return async dispatch => {
    const response = await getSearchResult(searchText);
    dispatch({
      type: SEARCHED_MOVIES,
      payload: response.results,
    });
  };
};
