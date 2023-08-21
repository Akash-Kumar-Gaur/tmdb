import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BASE_IMAGE_URL} from '../global.constants';

function MovieCard({
  index = 0,
  poster = '',
  title = '',
  relDate = '',
  overview = '',
}) {
  return (
    <TouchableOpacity key={index} style={styles.cardWrapper}>
      <Image source={{uri: BASE_IMAGE_URL + poster}} style={styles.poster} />
      <View style={styles.pad8}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>Year: {relDate.split('-')[0]}</Text>
        <Text numberOfLines={5} style={styles.overview}>
          {overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 32,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderWidth: 1,
    borderColor: '#a0a0a020',
    flexDirection: 'row',
  },
  poster: {
    height: 161,
    width: 109,
    resizeMode: 'contain',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 12,
    marginTop: 6,
  },
  releaseDate: {
    color: '#A0A0A0',
    fontFamily: 'Poppins',
    fontSize: 10,
    marginTop: 6,
  },
  overview: {
    color: '#A0A0A0',
    fontFamily: 'Poppins',
    fontSize: 10,
    marginTop: 6,
    width: 109,
  },
  pad8: {padding: 8},
});
