<template>
  <div id="mapbox"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: 'mapbox',
  props: ['features'],
  data() {
    return {
      sourceName: 'ip-coordinates'
    };
  },
  mounted() {
    let self = this;
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FtbXVnZyIsImEiOiJjanRpOWNlZXQwbTRyNGFsZjA2bDAyOXByIn0.SFT7EK3TupAtjvsb2XjBEA";

    self.map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/dark-v9",
      center: [-78.6382, 35.7796],
      zoom: 10,
      minZoom: 5
    });

    self.map.on("load", function() {
      self.map.addSource(self.sourceName, {
        type: "geojson",
        data: self.features
      });

      self.map.addLayer(
        {
          id: "ip-coordinates-heat",
          type: "heatmap",
          source: self.sourceName,
          maxzoom: 12,
          paint: {
            // Increase the heatmap weight based on frequency
            "heatmap-weight": 1,
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            "heatmap-intensity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              1,
              9,
              3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(33,102,172,0)",
              0.2,
              "rgb(103,169,207)",
              0.4,
              "rgb(209,229,240)",
              0.6,
              "rgb(253,219,199)",
              0.8,
              "rgb(239,138,98)",
              1,
              "rgb(178,24,43)"
            ],
            // Adjust the heatmap radius by zoom level
            "heatmap-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              2,
              9,
              20
            ],
            // Transition from heatmap to circle layer by zoom level
            "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 8, 1, 12, 0]
          }
        },
        "waterway-label"
      );

      self.map.addLayer({
        id: "ip-coordinates-point",
        type: "circle",
        source: self.sourceName,
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#fff",
          "circle-radius": 2,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff"
        }
      });

      self.$emit('initialized', self.map);
    });
  },
  watch: {
    features: function () {
      let self = this;
      let source = self.map.getSource(self.sourceName);
      if (!source) {
        /* hacky, but it gets the initial data to load if it's available before
           map has finished initializing */
        setTimeout(function () {
          self.map.getSource(self.sourceName).setData(self.features);
        });
        return;
      }
      source.setData(self.features);
    }
  }
};
</script>

<style lang="scss">
#mapbox {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;

  .mapboxgl-canvas {
    position: relative !important;
  }
}
</style>

