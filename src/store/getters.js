/**
 * Names of getter functions should describe what they're retrieving.
 *
 * Getters only receive the state
 * @param {*} state - current state from the store created through VueX
 */

/**
 * Uses current or default location to return the centerPoint for the mapbox instance.
 * @returns {Array} [center longitude, center latitude]
 */
const GET_CENTER_POINT = state => {
  let currentLocation = state.currentLocation || state.defaultLocation;
  let locationInfo = state.locations[currentLocation];

  return [
    locationInfo.lowerlong + (locationInfo.upperlong - locationInfo.lowerlong) / 2,
    locationInfo.lowerlat + (locationInfo.upperlat - locationInfo.lowerlat) / 2
  ];
};

export default {
  GET_CENTER_POINT
};
