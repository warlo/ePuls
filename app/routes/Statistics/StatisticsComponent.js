import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import StockLineChart from '../../components/StockLineChart';
import data from '../../data.json';

const Statistics = (props) => (
  <View style={styles.root}>
    <Text>ASD</Text>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Statistics
      </Text>
      <StockLineChart data={data} />
    </View>
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

export default Statistics;
