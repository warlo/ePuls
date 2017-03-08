import styles from './styles';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import StockLineChart from '../../components/StockLineChart';
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
          <Text style={styles.welcome}>
            PAI: 90
          </Text>
          <StockLineChart pai={this.props.pai} />
          <Button title='Hjem' onPress={() => {Actions.tabbar();}} />
        </View>
      </View>
    )
  }
}


export default Home;
