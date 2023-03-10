// TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN 
// FROM https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiY3lhbmppbmVyIiwiYSI6ImNsZHhvMjBpMTBqNWwzb251MmZ2Y3IxdHEifQ.-slkdGumRWgesNzSsFyZ7Q';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio

    style: 'mapbox://styles/mapbox/light-v10', // style URL --> More styles see: https://www.mapbox.com/gallery
    center: [-122.15, 37.6], // starting position [lng, lat] --> this is palo alto

    zoom: 9.5, // starting zoom

    // restrict the zoom in level to just Cali
    maxZoom: 10, 
    minZoom: 6 
    });
    var style = 'mapbox://styles/mapbox/light-v10';

    document.getElementById('switch-day').addEventListener('click', function () {
        style = 'mapbox://styles/mapbox/light-v10';
        map.setStyle(style);
        document.getElementById('map-title').style.color = 'black';
    });

    document.getElementById('switch-night').addEventListener('click', function () {
        style = 'mapbox://styles/mapbox/dark-v10';
        map.setStyle(style);
        document.getElementById('map-title').style.color = 'white';
    });