import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import HomeComponent from './HomeComponent';
import { fetch } from 'app/actions/StatisticsActions';
import { setCharacteristic, setPeripheral, setBPM } from 'app/actions/BLEActions';
import { selectStatisticById, selectPaiForStatistic } from 'app/reducers/statistics';
import { selectTotalPai } from 'app/reducers/pai';


const Home = (props) => (
  <HomeComponent {...props} />
);

const mapStateToProps = (state, props) => {
  const user = state.routes.user || 1;
  const statistic = selectStatisticById(state, { userId: user });
  const pai = selectPaiForStatistic(state, { userId: user });
  const totalPai = selectTotalPai(state);
  const peripheral = state.ble.peripheral;
  const characteristic = state.ble.characteristic;
  const bpm = state.ble.bpm;
  return {
    user,
    statistic,
    pai,
    totalPai,
    characteristic,
    peripheral,
    bpm
  };
};

const mapDispatchToProps = {
  fetch,
  setCharacteristic,
  setPeripheral,
  setBPM
};

export default connect(mapStateToProps,
  mapDispatchToProps
)(Home);;
