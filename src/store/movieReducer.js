import {RATED_MOVIES, SEARCHED_MOVIES, UPCOMING_MOVIES} from './actionTypes';

const initialState = {
  ratedMovies: [],
  upcomingMovies: [],
  searchedResults: null,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATED_MOVIES:
      return {
        ...state,
        ratedMovies: action.payload,
      };
    case UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case SEARCHED_MOVIES:
      return {
        ...state,
        searchedResults: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
