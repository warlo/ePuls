import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import TabView from '../../components/TabView';

const LogData = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        LogData
      </Text>
      <View>
        <Text>Vekt</Text>
        <TextInput
          style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
      <View>
        <Text>Midjemål</Text>
        <TextInput
          style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
      <Button title='Send' />
    </View>
    <TabView scene={props.scene} />
  </View>
)

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

export default LogData;
