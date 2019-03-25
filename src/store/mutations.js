/**
 * Names of mutation functions should describe the event that caused them.
 *
 * Mutations expect two parameters
 * @param {*} state - current state from the store created through VueX
 * @param {*} payload - the data with which the state should be updated. All updates must be in one payload
 */

const RECEIVED_NEW_FEATURE_COLLECTION = (state, payload) => {
  state.featureCollection = payload.results;
  state.currentLocation = payload.location;
};

const MAP_IS_INITIALIZED = (state) => {
  state.isInitialized = true;
};

const INCREMENT_LOADING_COUNTER = (state) => {
  state.isLoading++;
};

const DECREMENT_LOADING_COUNTER = (state) => {
  state.isLoading--;
};

export default {
  RECEIVED_NEW_FEATURE_COLLECTION,
  MAP_IS_INITIALIZED,
  INCREMENT_LOADING_COUNTER,
  DECREMENT_LOADING_COUNTER
};
