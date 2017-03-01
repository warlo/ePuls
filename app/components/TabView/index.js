import styles from './styles';
import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Entypo';

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
          onSelect={el => this.changeScene(el.props.scene)}
        >
          <Icon scene='home' name='home' size={20} selectedIconStyle={styles.selectedIcon} />
          <Icon scene='statistics' name='bar-graph' selectedIconStyle={styles.selectedIcon} />
          <Icon scene='logdata' name='circle-with-plus' size={25} selectedIconStyle={styles.selectedIcon} />
          <Icon scene='mindfulness' name='emoji-happy' size={20} selectedIconStyle={styles.selectedIcon} />
          <Icon scene='sharing' name='users' size={20} selectedIconStyle={styles.selectedIcon} />
        </Tabs>
      </View>
    )
  }
}

export default TabView;
