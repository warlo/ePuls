import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Row = ({ title, subtitle }) => (
  <View style={styles.root}>
    <View style={styles.inner}>
      <Text style={styles.text}>{title || 'HEY'}</Text>
      {subtitle && (<Text style={styles.subtext}>{subtitle}</Text>)}
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    height: 75,
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    marginLeft: 10,
  },
  subtext: {
    marginLeft: 10,
    alignSelf: 'flex-end'
  }
})

export default Row;
