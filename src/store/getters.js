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

  let longitude;
  if (locationInfo.lowerlong > locationInfo.upperlong) {
    // longitude bounds cross the 180th meridian. calculate in 360 and convert
    longitude = locationInfo.lowerlong + (locationInfo.upperlong + 360 - locationInfo.lowerlong) / 2 - 360;
  } else {
    longitude = locationInfo.lowerlong + (locationInfo.upperlong - locationInfo.lowerlong) / 2;
  }

  let latitude = locationInfo.lowerlat + (locationInfo.upperlat - locationInfo.lowerlat) / 2;

  return [
    longitude === -180 ? 180 : longitude,
    latitude
  ];
};

export default {
  GET_CENTER_POINT
};
