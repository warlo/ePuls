import React from 'react';
import { connect } from 'react-redux';
import LogDataComponent from './LogDataComponent';
import data from '../../data.json';


const LogData = (props) => (
  <LogDataComponent {...props} />
);

const mapStateToProps = (state) => ({
  scene: state.routes.scene.name,
  data
})

export default connect((
  ({ routes }) => ({ routes }), mapStateToProps),
  null
)(LogData);;
