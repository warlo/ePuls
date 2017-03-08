import { Schema, arrayOf } from 'normalizr';
import { combineReducers } from 'redux';
import routes from './routes';
import statistics from './statistics';
import pai from './pai';

const rootReducer = combineReducers({
  routes,
  statistics,
  pai
});

export const statisticsSchema = new Schema('statistics', { idAttribute: 'id' });
export const paiSchema = new Schema('pai', { idAttribute: 'id' });

statisticsSchema.define({
  pai: arrayOf(paiSchema)
});

export default rootReducer;
