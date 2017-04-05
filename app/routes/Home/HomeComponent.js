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
    device: '62aa0266a31647c08f422faae411a41b',
  }

  componentDidMount() {
    this.props.fetch(this.props.user);
  }

  componentWillMount() {
    console.log('willmount', this.props);
    if (this.props.peripheral && this.props.characteristic) {
      console.log('startsubscribe')
      this.subscribe(this.props.characteristic);
    } else {

    if (noble.state === 'poweredOn' && !this.peripheral) {
      noble.startScanning();
    }

    noble.on('stateChange', (state) => this._onStateChange(state));
    noble.on('discover', (peripheral) => this._onDiscover(peripheral));
    }
  }

  componentWillUnmount() {
    if (this.props.characteristic) {
      this.props.characteristic.unsubscribe((err) => {
        if (err) {
          console.log('error', err)
          return
        }
        console.log('unsubscribed');
        this.props.setCharacteristic(null);
        this.props.setPeripheral(null);
      });
    }
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
    if (peripheral.id === this.state.device && peripheral.state == "disconnected") {
      peripheral.once('connect', () => {
        this.peripheral = peripheral;
        this.props.setPeripheral(peripheral);
        console.log('connected');
        noble.stopScanning();
      });
      peripheral.connect((err) => {
        if (err) {
          console.log('error', err)
        }
        peripheral.discoverSomeServicesAndCharacteristics(
          ['180d'],
          ['2a37'],
          (error, services, characteristics) => {
            if (characteristics.length === 1) {
              this.props.setCharacteristic(characteristics[0]);
              this.subscribe(characteristics[0]);
            }
        });
      });
    }
 }

 subscribe(characteristic) {
   characteristic.unsubscribe((err) => {
     if (err) {
       console.log('error', err)
       return
     }
     console.log('unsubscribed');
     characteristic.subscribe((err) => {
       if (err) {
         console.log('error', err);
         return
       }
     });
   })
   characteristic.on('data', (data, isNotification) => {
     const bpm = data[1];
     this.props.setBPM(bpm)
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
                {this.props.bpm} BPM
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
