import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
  collapsed: true,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware
)(createStore);

//const store = createStoreWithMiddleware(rootReducer, autoRehydrate());
const store = createStoreWithMiddleware(rootReducer);
persistStore(store, { storage: AsyncStorage });

export default store;
