<template>
  <div id="app">
    <div id="block-overlay" v-show="!isInitialized || isLoading">
      <span>{{ overlayText }}</span>
    </div>
    <div id="current-location">
      <h1>IPs Loaded for: {{ locations[currentLocation || defaultLocation].displayName }}</h1>
    </div>
    <location-nav-drawer id="nav-drawer" :locations="locations" @navigate="navigateTo"></location-nav-drawer>
    <mapbox
      :centerPoint="centerPoint"
      :zoomLevel="locations[currentLocation || defaultLocation].zoom"
      :features="featureCollection"
      @initialized="onInitialized"
    ></mapbox>
  </div>
</template>

<script>
import Mapbox from '@/components/MapBox.vue';
import LocationNavDrawer from '@/components/LocationNavDrawer.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Mapbox,
    LocationNavDrawer
  },
  data() {
    return {};
  },
  methods: {
    onInitialized() {
      this.$store.commit('MAP_IS_INITIALIZED');

      // initialize location to Raleigh
      this.$store.commit('INCREMENT_LOADING_COUNTER');
      this.$store.dispatch('FETCH_IPS_FOR_LOCATION', this.defaultLocation);
    },
    navigateTo(key) {
      // initialize location to Raleigh
      this.$store.commit('INCREMENT_LOADING_COUNTER');
      this.$store.dispatch('FETCH_IPS_FOR_LOCATION', key);
    }
  },
  computed: {
    ...mapState(['isInitialized', 'isLoading', 'defaultLocation', 'currentLocation', 'locations', 'featureCollection']),
    ...mapGetters({ centerPoint: 'GET_CENTER_POINT' }),
    overlayText() {
      return !this.isInitialized ? 'Initializing...' : 'Loading Data...';
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  #block-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  #current-location {
    position: fixed;
    width: 100%;
    z-index: 3; // sit it below toggle for nav drawer
    top: 16px;
    padding-left: 88px;
    padding-right: 16px;
    text-align: right;
    font-weight: 600;
  }
}
</style>
