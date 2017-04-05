import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll: {
    alignSelf: 'stretch',
    height: 200,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  }
});

export default styles;
