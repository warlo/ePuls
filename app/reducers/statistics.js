import { Statistics } from 'app/actions/ActionTypes';
import createEntityReducer from 'app/utils/createEntityReducer';
import { createSelector } from 'reselect';

const initialState = {
  byId: {},
}

function mutate(state, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default createEntityReducer({
  key: 'statistics',
  types: {
    fetch: Statistics.FETCH
  },
  mutate
});

export const selectStatisticById = createSelector(
  (state) => state.statistics.byId,
  (state, props) => props.userId,
  (statisticsById, userId) => {
    const statistic = statisticsById[userId];
    if (statistic) {
      return statistic;
    }
    return {};
  }
);

export const selectPaiForStatistic = createSelector(
  selectStatisticById,
  (state) => state.pai.byId,
  (statistic, paiById) => {
    if (!statistic) return [];
    return (statistic.pai || []).map((paiId) => (paiById[paiId]));
  }
);
