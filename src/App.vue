<template>
  <div id="app">
    <div id="mapbox"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  name: 'app',
  mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2FtbXVnZyIsImEiOiJjanRpOWNlZXQwbTRyNGFsZjA2bDAyOXByIn0.SFT7EK3TupAtjvsb2XjBEA';
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-98, 40],
      zoom: 4
    });
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html,
body,
#app,
#mapbox {
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
  color: #2c3e50;
}

#mapbox {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  .mapboxgl-canvas {
    position: relative !important;
  }
}
</style>
