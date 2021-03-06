export default {
  isInitialized: false,
  isLoading: 0, // loading counter; 0 means no requests out in the wild
  featureCollection: {
    type: 'FeatureCollection',
    features: []
  },
  defaultLocation: 'rdu',
  currentLocation: undefined,
  locations: {
    rdu: {
      displayName: 'Raleigh-Durham, NC, USA',
      zoom: 10,
      lowerlong: -79.112591,
      upperlong: -78.432304,
      lowerlat: 35.668521,
      upperlat: 36.106756
    },
    'north-carolina': {
      displayName: 'North Carolina, USA',
      zoom: 6,
      lowerlong: -84.200329,
      upperlong: -75.746238,
      lowerlat: 33.715752,
      upperlat: 36.603301
    },
    nyc: {
      displayName: 'New York, NY, USA',
      zoom: 10,
      lowerlong: -74.23273,
      upperlong: -73.691721,
      lowerlat: 40.488265,
      upperlat: 40.896767
    },
    alaska: {
      displayName: 'Alaska, USA',
      zoom: 4,
      lowerlong: 172.912256,
      upperlong: -130.52122,
      lowerlat: 54.346166,
      upperlat: 70.233075
    },
    colorado: {
      displayName: 'Colorado, USA',
      zoom: 6,
      lowerlong: -109.052797,
      upperlong: -102.020483,
      lowerlat: 36.986707,
      upperlat: 40.981271
    },
    'new-zealand': {
      displayName: 'New Zealand, Planet Earth',
      zoom: 5,
      lowerlong: 160.455982,
      upperlong: -175.346653,
      lowerlat: -46.55593,
      upperlat: -31.939761
    },
    cairo: {
      displayName: 'Cairo, Egypt',
      zoom: 7,
      lowerlong: 28.947179,
      upperlong: 32.90159,
      lowerlat: 29.732618,
      upperlat: 31.599636
    },
    tokyo: {
      displayName: 'Tokyo, Japan',
      zoom: 8,
      lowerlong: 139.305486,
      upperlong: 141.053251,
      lowerlat: 34.850356,
      upperlat: 36.183043
    },
    'hong-kong': {
      displayName: 'Hong Kong, China',
      zoom: 8,
      lowerlong: 112.841494,
      upperlong: 114.65911,
      lowerlat: 21.988872,
      upperlat: 23.453335
    },
    'mumbai-pune': {
      displayName: 'Mumbai & Pune, Maharashtra, India',
      zoom: 8,
      lowerlong: 72.727796,
      upperlong: 74.107135,
      lowerlat: 18.396496,
      upperlat: 19.338285
    },
    delhi: {
      displayName: 'National Capital Territory of Delhi, Indian',
      zoom: 9,
      lowerlong: 76.826355,
      upperlong: 77.637898,
      lowerlat: 28.076989,
      upperlat: 28.964526
    },
    italy: {
      displayName: 'Italy, Planet Earth',
      zoom: 5,
      lowerlong: 7.076588,
      upperlong: 19.332638,
      lowerlat: 36.854128,
      upperlat: 45.91667
    },
    switzerland: {
      displayName: 'Switzerland, Planet Earth',
      zoom: 7,
      lowerlong: 5.899028,
      upperlong: 10.499859,
      lowerlat: 45.807164,
      upperlat: 47.629201
    },
    colombia: {
      displayName: 'Colombia, Planet Earth',
      zoom: 5,
      lowerlong: -79.179206,
      upperlong: -66.838586,
      lowerlat: -3.987991,
      upperlat: 12.303327
    },
    hispaniola: {
      displayName: 'Haiti & the Dominican Republic, Hispaniola',
      zoom: 7,
      lowerlong: -74.371449,
      upperlong: -67.94969,
      lowerlat: 17.444654,
      upperlat: 20.516892
    },
    iceland: {
      displayName: 'Iceland, Planet Earth',
      zoom: 6,
      lowerlong: -24.223513,
      upperlong: -13.156944,
      lowerlat: 62.998821,
      upperlat: 66.977338
    },
    'uk-ireland': {
      displayName: 'The United Kingdom & the Republic of Ireland',
      zoom: 6,
      lowerlong: -11.019977,
      upperlong: 1.552533,
      lowerlat: 49.919323,
      upperlat: 58.60483
    }
  }
};
