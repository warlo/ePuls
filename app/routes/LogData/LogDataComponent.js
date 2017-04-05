import styles from './styles';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const onSubmit = () => {
  console.log('Pressed');
}

const LogData = (props) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <TextInput
              keyboardType={'numeric'}
              style={styles.input}
              clearTextOnFocus
            />
          </View>
          <View style={styles.row}>
            <View style={styles.textElement}>
              <Text style={styles.text}>Midjemål</Text>
            </View>
            <TextInput
              keyboardType={'numeric'}
              style={styles.input}
              clearTextOnFocus
            />
          </View>
          <Button onPress={onSubmit} color="#2980B9" title='Send' />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default LogData;
