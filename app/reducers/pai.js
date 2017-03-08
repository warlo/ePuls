import { Statistics } from 'app/actions/ActionTypes';
import createEntityReducer from 'app/utils/createEntityReducer';

export default createEntityReducer({
  key: 'pai',
  types: {
    fetch: Statistics.FETCH
  }
});
