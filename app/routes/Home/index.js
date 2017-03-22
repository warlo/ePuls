import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import HomeComponent from './HomeComponent';
import { fetch } from 'app/actions/StatisticsActions';
import { selectStatisticById, selectPaiForStatistic } from 'app/reducers/statistics';


const Home = (props) => (
  <HomeComponent {...props} />
);

const mapStateToProps = (state, props) => {
  const statistic = selectStatisticById(state, { userId: 1 });
  const pai = selectPaiForStatistic(state, { userId: 1 });
  return {
    statistic,
    pai
  };
};

const mapDispatchToProps = {
  fetch
};

export default connect(mapStateToProps,
  mapDispatchToProps
)(Home);;
