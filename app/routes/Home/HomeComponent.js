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
  state = {
    bpm: 0
  }

  componentDidMount() {
    this.props.fetch(this.props.user);
    setInterval(() => {
      const random = Math.floor(Math.random() * 10);
      this.setState({
        bpm: 60 + random
      });
    }, 1000)
  }

  render() {
    const { pai, totalPai } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.headerContent}>
            <View style={{ width: 75 }}>
            </View>
            <View>
              <Text style={styles.text}>
                PAI
              </Text>
              <Text style={styles.pai}>{totalPai}</Text>
            </View>
            <View style={{ width: 75 }}>
              <Text style={styles.subtext}>
                {this.state.bpm} BPM
              </Text>
            </View>
          </View>
          <BarChart data={this.props.pai} />
        </View>
      </View>
    )
  }
}


export default Home;
