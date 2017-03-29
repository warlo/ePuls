import { Statistics } from 'app/actions/ActionTypes';
import createEntityReducer from 'app/utils/createEntityReducer';
import { createSelector } from 'reselect';

export default createEntityReducer({
  key: 'pai',
  types: {
    fetch: Statistics.FETCH
  }
});

export const selectTotalPai = createSelector(
  (state) => state.pai.byId,
  (paiById) => (
    Object.values(paiById) || []).reduce((a, b) => a + b.value, 0
  )
);
