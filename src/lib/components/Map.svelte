<script>
  import { onMount } from 'svelte';

  export let color="#ff0000", latitude, longitude, zoom = 16;
  let mapContainer, map;

  window.initMap = function() {
  // {{-- Map custom settings --}}
  const customColor = color;
  var mapsLatLng = new google.maps.LatLng(latitude, $longitude);

  // {{-- Basic options for a simple Google Map --}}
  // {{-- For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions --}}
  var mapOptions = {
    scrollwheel: false,
    // {{-- How zoomed in you want the map to start at (always required) --}}
    zoom,
    // disableDefaultUI: true,
    mapTypeControl: false,


    // {{-- The latitude and longitude to center the map (always required) --}}
    center: mapsLatLng,

    // {{-- How you would like to style the map. --}}
    // {{-- This is where you would paste any style found on Snazzy Maps. --}}
    styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dadada"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":customColor},{"weight":"1.50"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"},{"lightness":"43"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]}]
  };

  var mapElement = document.getElementById('map');
  // var svg = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 80"><defs><style>.cls-1 { fill: #6fb74d; } </style></defs><path class="cls-1" d="M30,.86A27.45,27.45,0,0,0,2.55,28.31C2.55,51.69,30,79,30,79S57.45,51.69,57.45,28.31A27.45,27.45,0,0,0,30,.86Zm0,39.62A12.17,12.17,0,1,1,42.17,28.31,12.17,12.17,0,0,1,30,40.48Z"/></svg>';

  var customMarker = {
      url: "/marker.svg",
      // url: 'data:image/svg+xml;utf8,' + encodeURIComponent(svg); {{-- not working for some reason --}}
      scaledSize: new google.maps.Size(30,40),
  };

  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: mapsLatLng,
    icon: customMarker,
    map: map,
    title: 'Dungelhoeff'
  });
}
</script>

<svelte:head>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZzWYEf3-KfD8j9zcDmJnCBwy55l_-D_Y&callback=initMap"></script>
</svelte:head>
HIER:
<div id="map" bind:this={mapContainer}></div>