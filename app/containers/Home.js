import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import TabView from '../components/TabView';
import StockLineChart from '../components/StockLineChart';
import data from '../data.json';

const Home = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        PAI: 90
      </Text>
      <StockLineChart data={data} />
    </View>
    <TabView name={props.name} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Home;
