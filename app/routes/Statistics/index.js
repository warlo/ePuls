import React from 'react';
import { connect } from 'react-redux';
import StatisticsComponent from './StatisticsComponent';
import { selectStatisticById, selectPaiForStatistic } from 'app/reducers/statistics';

const Statistics = (props) => (
  <StatisticsComponent {...props} />
);

const mapStateToProps = (state) => {
  const statistic = selectStatisticById(state, { userId: 1 });
  const pai = selectPaiForStatistic(state, { userId: 1 });
  return {
    statistic,
    pai
  }
};

export default connect(mapStateToProps, null)(Statistics);
