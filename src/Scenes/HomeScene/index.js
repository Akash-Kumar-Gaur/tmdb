import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import configureStore from '../../store';
import {Provider} from 'react-redux';
import RatedMovies from './components/RatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import Filters from './components/Filters';
import SearchResults from './components/SearchResults';

export default function HomeScene() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ScrollView style={styles.wrapper}>
        <Header />
        <SearchBar />
        <Filters />
        <SearchResults />
        <RatedMovies />
        <UpcomingMovies />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#09090F'},
});
