import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {useDebounce} from '../../../CustomHooks';
import {getSearchedMovieAction} from '../../../store/actions';
import {useDispatch} from 'react-redux';
import {SEARCHED_MOVIES} from '../../../store/actionTypes';

const searchIcon =
  'https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/64/1A1A1A/external-search-user-interface-febrian-hidayat-glyph-febrian-hidayat.png';

function SearchBar({setIsSearching = () => {}}) {
  const [searchString, setSearchString] = useState('');
  const debouncedSearchTerm = useDebounce(searchString, 300);

  const dispatch = useDispatch();

  useEffect(() => {
    const searchHN = () => {
      setIsSearching(true);
      if (searchString === '') {
        dispatch({
          type: SEARCHED_MOVIES,
          payload: null,
        });
        return;
      }
      if (debouncedSearchTerm !== '') {
        dispatch(getSearchedMovieAction(debouncedSearchTerm));
      }
      setIsSearching(false);
    };
    searchHN();
  }, [debouncedSearchTerm, dispatch, searchString, setIsSearching]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies"
        placeholderTextColor={'#a0a0a080'}
        onChangeText={text => setSearchString(text)}
      />
      <View>
        <Image source={{uri: searchIcon}} style={styles.search} />
      </View>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: 48, position: 'relative'},
  input: {
    borderRadius: 16,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    color: '#A0A0A0',
    paddingHorizontal: 16,
    borderColor: '#a0a0a070',
    borderWidth: 1,
  },
  search: {
    width: 30,
    aspectRatio: 1,
    tintColor: '#fff',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
