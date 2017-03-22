import styles from './styles.js';
import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import Row from 'app/components/Row';
import Ionicon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    title: 'Motivasjon',
    subtitle: '2 min'
  }, {
    title: 'Konsentrasjon',
    subtitle: '5 min'
  }, {
    title: 'Avspenning',
    subtitle: '10 min'
  }, {
    title: 'Mindful spasertur',
    subtitle: '30 min'
  }
];

const Mindfulness = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicon name='ios-sunny' size={30} />
        <Text style={styles.text}>
          Mindfulness
        </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {data.map((elem, i) => (<Row key={i} title={elem.title} subtitle={elem.subtitle} />))}
      </ScrollView>
    </View>
  </View>
);

export default Mindfulness;
