import axios from 'axios';
import constants from '@/constants';

/**
 * Actions receive the store as their first argument then other inputs.
 *
 * @param { commit, state, dispatch, getter } store - the store object
 * @param {*} payload - the data with which the state should be updated. All data must be in one payload
 */

/**
 * Payload is expected to be the string location to fetch data for
 */
const FETCH_IPS_FOR_LOCATION = ({ commit }, payload) => {
  let location = constants.locations[payload];

  return axios({
    method: 'get',
    url:
      `${process.env.VUE_APP_API_URL}/ip-coordinates?` +
      `lowerlong=${location.lowerlong}&` +
      `upperlong=${location.upperlong}&` +
      `lowerlat=${location.lowerlat}&` +
      `upperlat=${location.upperlat}`
  }).then(results => {
    commit('RECEIVED_NEW_FEATURE_COLLECTION', results.data);
  });
};

export default {
  FETCH_IPS_FOR_LOCATION
};
