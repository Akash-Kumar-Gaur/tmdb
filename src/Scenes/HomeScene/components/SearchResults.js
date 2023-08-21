import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchedMovieAction} from '../../../store/actions';
import MovieScroll from '../../../Components/MovieScroll';

function SearchResults({isSearching}) {
  const movies = useSelector(movies => movies.searchedResults);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchedMovieAction());
  }, [dispatch]);

  if (movies === null) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Search Results</Text>
      <View style={styles.listWrapper}>
        <MovieScroll movies={movies} isSearching={isSearching} />
      </View>
    </View>
  );
}

export default SearchResults;

const styles = StyleSheet.create({
  wrapper: {marginTop: 36},
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 48,
    fontFamily: 'Poppins',
  },
  listWrapper: {paddingLeft: 48, marginTop: 16},
});
