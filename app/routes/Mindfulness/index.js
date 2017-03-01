import React from 'react';
import { connect } from 'react-redux';
import MindfulnessComponent from './MindfulnessComponent';
import data from '../../data.json';


const Mindfulness = (props) => (
  <MindfulnessComponent {...props} />
);

const mapStateToProps = (state) => ({
  scene: state.routes.scene.name,
  data
})

export default connect((
  ({ routes }) => ({ routes }), mapStateToProps),
  null
)(Mindfulness);;
