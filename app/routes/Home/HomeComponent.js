import styles from './styles';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import TabView from '../../components/TabView';
import StockLineChart from '../../components/StockLineChart';
import { Actions } from 'react-native-router-flux';

const Home = (props) => {
  console.log('homeprops', props);
  return (
  <View style={styles.root}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        PAI: 90
      </Text>
      <StockLineChart data={props.data} />
      <Button title='Hjem' onPress={() => {Actions.tabbar(); Actions.home();}} />
    </View>
    <TabView scene={props.scene} />
  </View>
)}


export default Home;
