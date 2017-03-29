import React from 'react';
import { connect } from 'react-redux';
import StatisticsComponent from './StatisticsComponent';
import { selectStatisticById, selectPaiForStatistic } from 'app/reducers/statistics';

const Statistics = (props) => (
  <StatisticsComponent {...props} />
);

const mapStateToProps = (state) => {
  const user = state.routes.user;
  const statistic = selectStatisticById(state, { userId: user });
  const pai = selectPaiForStatistic(state, { userId: user });
  return {
    statistic,
    pai
  }
};

export default connect(mapStateToProps, null)(Statistics);
