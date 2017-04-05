import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 40,
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
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 25
  },
  smallTitle: {
    fontSize: 15
  },
  sharingContent: {
    marginTop: 20
  },
  input: {
    height: 40,
    width: 60,
    borderColor: 'gray',
    borderWidth: 1
  },
  shareField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
});

export default styles;
