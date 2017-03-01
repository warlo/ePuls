import React from 'react';
import { Provider } from 'react-redux';
import App from './routes/App';

import store from './utils/configureStore';


const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
