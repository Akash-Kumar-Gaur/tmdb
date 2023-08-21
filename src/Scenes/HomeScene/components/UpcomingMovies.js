import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUpcomingMoviesAction} from '../../../store/actions';
import MovieScroll from '../../../Components/MovieScroll';

function UpcomingMovies() {
  const upcomingMovies = useSelector(movies => movies.upcomingMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcomingMoviesAction());
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Upcoming Movies</Text>
      <View style={styles.listWrapper}>
        <MovieScroll movies={upcomingMovies} />
      </View>
    </View>
  );
}

export default UpcomingMovies;

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
