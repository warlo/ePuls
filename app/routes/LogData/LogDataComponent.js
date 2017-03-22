import styles from './styles';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const onSubmit = () => {
  console.log('Pressed');
}

const LogData = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='plus' size={40} />
        <Text style={styles.headerText}>
          LEGG TIL
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.textElement}>
            <Text style={styles.text}>Vekt</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.row}>
          <View style={styles.textElement}>
            <Text style={styles.text}>Midjemål</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <Button onPress={onSubmit} title='Send' />
      </View>
    </View>
  </View>
);

export default LogData;
