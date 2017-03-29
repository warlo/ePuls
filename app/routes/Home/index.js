import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import HomeComponent from './HomeComponent';
import { fetch } from 'app/actions/StatisticsActions';
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
  console.log('tota', totalPai);
  return {
    user,
    statistic,
    pai,
    totalPai
  };
};

const mapDispatchToProps = {
  fetch
};

export default connect(mapStateToProps,
  mapDispatchToProps
)(Home);;
