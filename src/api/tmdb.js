const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTU4YTZmODBlZDk4OGQ0ZTM5N2NmOWY2ZTM2NTc1MiIsInN1YiI6IjY0ZTI0ZWI5MDc2Y2U4NDNiNWI4OWU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QyOr2lEf02G14kkMHQP4xcfX9GsVa7GS9yqbPtcfROY',
  },
};

export const getRatedMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options,
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(err => console.error(err));
};

export const getUpcomingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options,
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getSearchResult = (searchText = '') => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
    options,
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};
