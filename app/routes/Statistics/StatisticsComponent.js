import styles from './styles';
import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import Row from 'app/components/Row';
import Icon from 'react-native-vector-icons/Entypo';

const data = [
  {
    title: 'PAI'
  }, {
    title: 'Motivasjon'
  }, {
    title: 'Skritt'
  }, {
    title: 'Vekt'
  }, {
    title: 'Søvn'
  }
];

const Statistics = (props) => (
  <View style={styles.root}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='bar-graph' size={30} />
        <Text style={styles.text}>
          Statistikk
        </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {data.map((elem, i) => (<Row key={i} title={elem.title} />))}
      </ScrollView>
    </View>
  </View>
);

export default Statistics;
