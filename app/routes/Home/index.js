import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import data from '../../data.json';


const Home = (props) => (
  <HomeComponent {...props} />
);

const mapStateToProps = (state) => ({
  scene: state.routes.scene.name,
  data
})

export default connect((
  ({ routes }) => ({ routes }), mapStateToProps),
  null
)(Home);;
