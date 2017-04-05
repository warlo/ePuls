import styles from './styles';
import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
  TextInput
} from 'react-native';
import data from '../../data.json';
import Icon from 'react-native-vector-icons/Entypo';

const SharedField = ({ index, name, type, selected, handleChange }) => (
  <View style={styles.shareField}>
    <Switch value={selected} onValueChange={(value) => handleChange(value, index)} />
    <Text style={{ marginLeft: 10, fontSize: 14 }}>
      {type}: {name}
    </Text>
  </View>
)

class Sharing extends Component {
  state = {
    sharing: []
  }

  componentWillMount() {
    this.setState({
      sharing: this.props.statistic.sharing
    });
  }

  handleChange = (value, index) => {
    this.setState((state) => {
      return {
        ...state,
        sharing: state.sharing.map((elem, i) => {
          if (i === index) {
            return {
              ...elem,
              selected: !elem.selected
            };
          }
          return elem;
        })
      }
    });
  }

  render() {
    const { name, age, height, restingHeartRate } = this.props.statistic;
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name='users' size={30} />
            <Text style={styles.text}>
              Profil
            </Text>
          </View>
          <Text style={styles.title}>
            {name}
          </Text>
          <Text style={styles.smallTitle}>
            Alder: {age}
          </Text>
          <View style={{ paddingTop: 5 }}>
            <Text>Høyde</Text>
            <TextInput style={styles.input} value={height.toString()} />
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text>Hvilepuls</Text>
            <TextInput style={styles.input} value={restingHeartRate.toString()} />
          </View>
          <View style={{ paddingTop: 5 }}>
            <Text>Makspuls</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.sharingContent}>
            <Text>Delt med:</Text>
            {this.state.sharing.map((elem, i) => (
              <SharedField key={i} index={i} handleChange={this.handleChange} {...elem} />
            ))}
          </View>
        </View>
      </View>
    )
  }
}

export default Sharing;
