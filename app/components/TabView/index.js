import styles from './styles';
import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';

class TabView extends Component {
  state = {
    page: 'first'
  }

  changeScene = (name) => {
    console.log('as1231d', name);
    switch (name) {
      case 'home': {
        Actions.tabbar({name});
        Actions.home({name});
        break;
      }
      case 'statistics': {
        Actions.tabbar(name);
        Actions.statistics(name);
        break;
      }
      case 'logdata': {
        console.log('1', name);
        Actions.tabbar(name);
        Actions.logdata(name);
        break;
      }
      case 'mindfulness': {
        console.log('2', name);
        Actions.tabbar(name);
        Actions.mindfulness(name);
        break;
      }
      case 'sharing': {
        console.log('3', name);
        Actions.tabbar(name);
        Actions.sharing(name);
        break;
      }
      default: {}
    }
  }

  render() {
    console.log('asd', this.state, this.props);
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.props.name}
          onSelect={el => this.changeScene(el.props.name)}
        >
          <Text name='home' selectedIconStyle={styles.selectedIcon}>Hjem</Text>
          <Text name='statistics' selectedIconStyle={styles.selectedIcon}>Stats</Text>
          <Text name='logdata' selectedIconStyle={styles.selectedIcon}>+</Text>
          <Text name='mindfulness' selectedIconStyle={styles.selectedIcon}>Mind</Text>
          <Text name='sharing' selectedIconStyle={styles.selectedIcon}>Sharing</Text>
        </Tabs>
      </View>
    )
  }
}

export default TabView;
