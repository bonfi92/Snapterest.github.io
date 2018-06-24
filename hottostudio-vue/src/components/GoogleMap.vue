<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="15"
      :styles="styles"
      style="width:100%;  height: 100%;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      styles: [{
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36
        },
        {
          color: '#000000'
        },
        {
          lightness: 40
        }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on'
        },
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 20
        }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 20
        }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 21
        }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 17
        }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 18
        }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 16
        }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 19
        }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        },
        {
          lightness: 17
        }
        ]
      }
      ]
    };
  },

  mounted() {
    this.addMarker();
  },

  methods: {
    addMarker() {
      const marker = {
        lat: 45.445396,
        lng: 8.627361
      };
      this.markers.push({ position: marker });
      this.center = marker;
    }
  }
};
</script>
