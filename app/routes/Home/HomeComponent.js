import styles from './styles';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import StockLineChart from 'app/components/StockLineChart';
import BarChart from 'app/components/BarChart';
import { Actions, ActionConst } from 'react-native-router-flux';

class Home extends Component {

  componentDidMount() {
    this.props.fetch(1);
  }

  render() {
    console.log('props', this.props)
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.text}>
            PAI
          </Text>
          <Text style={styles.pai}>90</Text>
          <BarChart data={this.props.pai} />
        </View>
      </View>
    )
  }
}


export default Home;
