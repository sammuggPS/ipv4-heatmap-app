/**
 * Mutations expect two parameters
 * @param {*} state - current state from the store created through VueX
 * @param {*} payload - the data with which the state should be updated. All updates must be in one payload
 */

 const RECEIVED_NEW_FEATURE_COLLECTION = (state, payload) => {
  state.featureCollection = payload;
};

export default {
  RECEIVED_NEW_FEATURE_COLLECTION
};