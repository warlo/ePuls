import { get, union, mergeWith } from 'lodash';
import joinReducers from 'app/utils/joinReducers';

import type { ActionTypeObject } from 'app/utils/promiseMiddleware';


export function fetching(fetchType) {
  return (state, action) => {
    switch (action.type) {
      case fetchType.BEGIN:
        return { ...state, fetching: true };

      case fetchType.SUCCESS:
      case fetchType.FAILURE:
        return { ...state, fetching: false };

      default:
        return state;
    }
  };
}

function arrayOf(value) {
  if (Array.isArray(value)) return value;
  return [value];
}

function merge(old, updated) {
  return mergeWith({}, old, updated, (oldValue, newValue) =>
    (Array.isArray(oldValue) ? newValue : undefined
  ));
}

export function entities(key) {
  return (state = {
    byId: {},
    items: []
  }, action) => {
    const result = get(action, ['payload', 'entities', key]);
    if (!result) {
      return state;
    }

    return {
      ...state,
      byId: merge(state.byId, result),
      items: union(state.items, arrayOf(action.payload.result))
    };
  };
}

/**
 * Create reducers for common crud actions
 */
export default function createEntityReducer({
  key,
  types,
  mutate,
  initialState = {}
}) {
  const {
    fetch: fetchType,
    mutate: mutateType
  } = types;

  const finalInitialState = {
    byId: {},
    items: [],
    fetching: false,
    ...initialState
  };

  const reduce = joinReducers(
    fetching(fetchType),
    entities(key),
    mutate
  );

  return (state = finalInitialState, action) => reduce(state, action);
}
