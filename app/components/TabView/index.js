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

  changeScene = (name) => {
    console.log('as1231d', name);
    switch (name) {
      case 'home': {
        Actions.tabbar();
        Actions.home();
        break;
      }
      case 'statistics': {
        Actions.tabbar();
        Actions.statistics();
        break;
      }
      case 'logdata': {
        //Actions.tabbar(name);
        Actions.logdata();
        break;
      }
      case 'mindfulness': {
        //Actions.tabbar(name);
        Actions.mindfulness();
        break;
      }
      case 'sharing': {
        //Actions.tabbar(name);
        Actions.sharing();
        break;
      }
      default: {}
    }
  }

  render() {
    console.log('TABVIEW', this.props);
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.props.scene}
          onSelect={el => this.changeScene(el.props.name)}
        >
          <View name='home' selectedIconStyle={styles.selectedIcon}>
            <Icon name='home' size={20} />
          </View>
          <View name='statistics' selectedIconStyle={styles.selectedIcon}>
            <Icon name='bar-graph' />
          </View>
          <View name='logdata' selectedIconStyle={styles.selectedIcon}>
            <Icon name='circle-with-plus' size={25} />
          </View>
          <View name='mindfulness' selectedIconStyle={styles.selectedIcon}>
            <Icon name='emoji-happy' size={20} />
          </View>
          <View name='sharing' selectedIconStyle={styles.selectedIcon}>
            <Icon name='users' size={20} />
          </View>
        </Tabs>
      </View>
    )
  }
}

export default TabView;
