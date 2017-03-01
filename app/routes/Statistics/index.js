import React from 'react';
import { connect } from 'react-redux';
import StatisticsComponent from './StatisticsComponent';
import data from '../../data.json';


const Statistics = (props) => (
  <StatisticsComponent {...props} />
);

const mapStateToProps = (state) => ({
  scene: state.routes.scene.name,
  data
})

export default connect((
  ({ routes }) => ({ routes }), mapStateToProps),
  null
)(Statistics);;
