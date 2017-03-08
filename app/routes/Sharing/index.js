import React from 'react';
import { connect } from 'react-redux';
import SharingComponent from './SharingComponent';
import data from '../../data.json';


const Sharing = (props) => (
  <SharingComponent {...props} />
);

const mapStateToProps = (state, { routes }) => ({
  routes,
  scene: state.routes.scene.name,
  data
})

export default connect(mapStateToProps,
  null
)(Sharing);;
