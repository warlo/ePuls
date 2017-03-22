import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Launch from './Launch';
import Home from './Home';
import Statistics from './Statistics';
import LogData from './LogData';
import Mindfulness from './Mindfulness';
import Sharing from './Sharing';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ReduxRouter = connect()(Router);

const tabIcon = (icon, size=20) => (<Icon name={icon} size={size} />);

const App = () => (
  <ReduxRouter>
    <Scene key='root'>
      <Scene key='launch' title='Launch' component={Launch} initial hideNavBar />
      <Scene
        key='tabbar'
        tabs={true}
        tabBarSelectedItemStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}
        type={ActionConst.RESET}
      >
        <Scene
          key='home'
          title='Hjem'
          icon={() => tabIcon('home')}
          component={Home}
          initial
        />
        <Scene
          key='statistics'
          title='Statistikk'
          icon={() => tabIcon('bar-graph')}
          component={Statistics}
        />
        <Scene
          key='logdata'
          title='Logg data'
          icon={() => tabIcon('circle-with-plus', 25)}
          component={LogData}
        />
        <Scene
          key='mindfulness'
          title='Mindfulness'
          icon={() => (<IonIcon name='ios-sunny' size={25} />)}
          component={Mindfulness}
        />
        <Scene
          key='sharing'
          title='Deling'
          icon={() => tabIcon('users')}
          component={Sharing}
        />
      </Scene>
    </Scene>
  </ReduxRouter>
);

export default App;
