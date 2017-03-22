import React from 'react';
import { connect } from 'react-redux';
import SharingComponent from './SharingComponent';
import data from '../../data.json';
import { selectStatisticById } from 'app/reducers/statistics';

const Sharing = (props) => (
  <SharingComponent {...props} />
);

const mapStateToProps = (state) => {
  const statistic = selectStatisticById(state, { userId: 1 });
  return {
    statistic
  }
};

export default connect(mapStateToProps,
  null
)(Sharing);;
