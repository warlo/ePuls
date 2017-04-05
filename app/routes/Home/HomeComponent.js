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
import noble from 'react-native-ble';

class Home extends Component {
  state = {
    bpm: 0,
    device: '62aa0266a31647c08f422faae411a41b',
    connected: false
  }

  componentDidMount() {
    this.props.fetch(this.props.user);
  }
  
  componentWillMount() {
    if (noble.state === 'poweredOn') {
      noble.startScanning();
    }

    noble.on('stateChange', (state) => this._onStateChange(state));
    noble.on('discover', (peripheral) => this._onDiscover(peripheral));
  }

  _onStateChange(state) {
    console.log('state', state);
    if (state === 'poweredOn') {
      noble.startScanning();
    } else {
      noble.stopScanning();
    }
  }

  _onDiscover(peripheral) {
    console.log('peripheral', peripheral, this.state);
    if (peripheral.id === this.state.device) {
      peripheral.once('connect', () => {
        console.log('connected');
        noble.stopScanning();
      });
      peripheral.connect((err) => {
        if (err) {
          console.log('error', err)
        }
        peripheral.discoverSomeServicesAndCharacteristics(['180d'], ['2a37'], (error, services, characteristics) => {
          console.log('discover', error, services, characteristics);
          if (characteristics.length === 1) {
            this.subscribe(characteristics[0]);
          }
        });
      });
    }
 }

 subscribe(characteristic) {
   characteristic.on('data', (data, isNotification) => {
     const bpm = data[1];
     this.setState({
       bpm
     });
     console.log('yeye', data, isNotification);
   });
   characteristic.subscribe((err) => {
     if (err) {
       console.log('error', err);
     }
   });
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
