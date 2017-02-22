import React from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Launch from './Launch';
import Home from './Home';
import Statistics from './Statistics';
import LogData from './LogData';
import Mindfulness from './Mindfulness';
import Sharing from './Sharing';

const App = () => (
  <Router>
    <Scene key='root'>
      <Scene key='launch' title='Launch' component={Launch} initial hideNavBar />
      <Scene key='tabbar' tabs={true} type={ActionConst.REPLACE}>
        <Scene key='home' title='Hjem' component={Home} />
        <Scene key='statistics' title='Statistikk' component={Statistics} />
        <Scene key='logdata' title='Logg data' component={LogData} />
        <Scene key='mindfulness' title='Mindfulness' component={Mindfulness} />
        <Scene key='sharing' title='Deling' component={Sharing} />
      </Scene>
    </Scene>
  </Router>
);

export default App;
