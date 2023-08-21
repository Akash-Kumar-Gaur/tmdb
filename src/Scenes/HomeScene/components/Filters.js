import React from 'react';
import {FILTERS} from '../../../global.constants';
import {Image, StyleSheet, Text, View} from 'react-native';

function Filters() {
  return (
    <View style={styles.filtersWrapper}>
      <Text style={styles.header}>Filters</Text>
      <View style={styles.row}>
        {FILTERS.map((filter, index) => {
          const {name = '', options = [], icon = ''} = filter;
          return (
            <View key={index} style={{flex: 1}}>
              <View>
                <View style={styles.iconView}>
                  <Image source={{uri: icon}} style={styles.filterIcon} />
                </View>
                <Text style={styles.filterName}>{name}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Filters;

const styles = StyleSheet.create({
  filtersWrapper: {
    paddingHorizontal: 48,
    marginTop: 36,
  },
  header: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  filterIcon: {
    width: 24,
    aspectRatio: 1,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  iconView: {
    backgroundColor: '#51535D',
    width: 52,
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterName: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
