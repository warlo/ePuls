import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput
} from 'react-native';
import data from '../../data.json';

const SharedField = ({ name, type, selected }) => (
  <View style={styles.shareField}>
    <Switch value={selected} />
    <Text>
      {type}: {name}
    </Text>
  </View>
)

const Sharing = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <Text style={styles.title}>
        {data.user.name}
      </Text>
      <Text style={styles.smallTitle}>
        Alder: {data.user.age}
      </Text>
      <View style={{ paddingTop: 5 }}>
        <Text>Høyde</Text>
        <TextInput style={styles.input} value={data.user.height.toString()} />
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text>Hvilepuls</Text>
        <TextInput style={styles.input} value={data.user.restingHeartRate.toString()} />
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text>Makspuls</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.sharingContent}>
        <Text>Delt med:</Text>
        {data.user.sharing.map((elem, i) => (
          <SharedField key={i} {...elem} />
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Sharing;
