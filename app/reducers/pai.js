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
  (state) => state.statistics.byId,
  (state) => state.pai.byId,
  (state, props) => props.userId,
  (statisticsById, paiById, userId) => {
    if (statisticsById[userId] === undefined) {
      return
    }
    const items = statisticsById[userId].pai.map(id => paiById[id]);
    return Object.values(items || []).reduce((a, b) => a + b.value, 0);
  }
);
