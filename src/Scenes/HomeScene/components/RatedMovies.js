import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRatedMoviesAction} from '../../../store/actions';
import MovieScroll from '../../../Components/MovieScroll';

function RatedMovies() {
  const movies = useSelector(movies => movies.ratedMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRatedMoviesAction());
  }, [dispatch]);

  // console.warn('movies', movies);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Popular Movies</Text>
      <View style={styles.listWrapper}>
        <MovieScroll movies={movies} />
      </View>
    </View>
  );
}

export default RatedMovies;

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
