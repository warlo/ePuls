import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Launch from './Launch';
import Home from './Home';
import Statistics from './Statistics';
import LogData from './LogData';
import Mindfulness from './Mindfulness';
import Sharing from './Sharing';
import { connect } from 'react-redux';

const ReduxRouter = connect()(Router);

const App = () => (
  <ReduxRouter>
    <Scene key='root'>
      <Scene key='launch' title='Launch' component={Launch} initial hideNavBar />
      <Scene key='tabbar' tabs={true}>
        <Scene key='home' title='Hjem' component={Home} initial />
        <Scene key='statistics' title='Statistikk' component={Statistics} />
        <Scene key='logdata' title='Logg data' component={LogData} />
        <Scene key='mindfulness' title='Mindfulness' component={Mindfulness} />
        <Scene key='sharing' title='Deling' component={Sharing} />
      </Scene>
    </Scene>
  </ReduxRouter>
);

export default App;
