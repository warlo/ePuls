import React from 'react';
import { connect } from 'react-redux';
import LaunchComponent from './LaunchComponent';
import data from '../../data.json';


const Launch = (props) => (
  <LaunchComponent {...props} />
);

const mapStateToProps = (state) => ({
  scene: state.routes.scene.name,
  data
})

export default connect((
  ({ routes }) => ({ routes }), mapStateToProps),
  null
)(LaunchComponent);;
