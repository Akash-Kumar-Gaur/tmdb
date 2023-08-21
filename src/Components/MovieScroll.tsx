import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MovieCard from './MovieCard';

interface MovieScrollProps {
  movies: [
    {
      poster_path: string;
      original_title: string;
      release_date: string;
      overview: string;
    },
  ];
}

interface RenderProps {
  item: {
    poster_path: string;
    original_title: string;
    release_date: string;
    overview: string;
  };
  index: number;
}

const renderCard = ({item, index}: RenderProps) => {
  const {
    poster_path: poster,
    original_title: title,
    release_date: relDate,
    overview,
  } = item;
  return (
    <MovieCard
      index={index}
      poster={poster}
      title={title}
      relDate={relDate}
      overview={overview}
    />
  );
};

function MovieScroll({movies}: MovieScrollProps) {
  if (!movies.length) {
    return (
      <View>
        <Text style={styles.noRes}>No Results Found.</Text>
        <Text style={styles.noResInfo}>
          Please change the search string and try again
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      horizontal
      data={movies}
      keyExtractor={item => item.original_title + item.release_date}
      renderItem={renderCard}
      initialNumToRender={3}
    />
  );
}

export default MovieScroll;

const styles = StyleSheet.create({
  noRes: {color: '#fff'},
  noResInfo: {color: '#a0a0a080'},
});
