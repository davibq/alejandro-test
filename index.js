let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.9174343, lng: -84.0495747 },
    zoom: 16,
  });
}