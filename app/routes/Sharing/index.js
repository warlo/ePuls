import React from 'react';
import { connect } from 'react-redux';
import SharingComponent from './SharingComponent';
import data from '../../data.json';
import { selectStatisticById } from 'app/reducers/statistics';

const Sharing = (props) => (
  <SharingComponent {...props} />
);

const mapStateToProps = (state) => {
  const user = state.routes.user;
  const statistic = selectStatisticById(state, { userId: user });
  return {
    statistic
  }
};

export default connect(mapStateToProps,
  null
)(Sharing);;
