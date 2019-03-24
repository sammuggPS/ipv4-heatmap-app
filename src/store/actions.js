import axios from 'axios';

/**
 * Actions receive the store as their first argument then other inputs.
 *
 * @param { commit, state, dispatch, getter } store - the store object
 * @param {*} payload - the data with which the state should be updated. All data must be in one payload
 */

 const FETCH_STARTING_RALEIGH_IPS = ({commit}) => {
   return axios({
      method: 'get',
      url: `${process.env.VUE_APP_API_URL}/ip-coordinates?lowerlong=-78.9100&upperlong=-78.4989&lowerlat=35.6903&upperlat=35.9536`
    })
    .then((results) => {
      commit('RECEIVED_NEW_FEATURE_COLLECTION', results.data);
    });
 };

export default {
  FETCH_STARTING_RALEIGH_IPS
};