import callAPI from './callAPI';
import { statisticsSchema } from 'app/reducers';
import { Statistics } from './ActionTypes';

export function fetch(userId) {
  return callAPI({
    types: Statistics.FETCH,
    endpoint: `/statistics/${userId}`,
    schema: statisticsSchema,
    meta: {
      errorMessage: 'Fetching statistic failed'
    }
  });
}
