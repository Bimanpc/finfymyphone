function initMap() {
  window.map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

function placeMarker(location) {
  if (window.marker) {
    window.marker.setPosition(location);
  } else {
    window.marker = new google.maps.Marker({
      position: location,
      map: window.map
    });
  }
  window.map.setCenter(location);
}
