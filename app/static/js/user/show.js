/* global google:true */

(function(){
  'use strict';

  var map;

  $(document).ready(function(){
    var name = $('#vacation').attr('data-name'),
        lat  = $('#vacation').attr('data-lat'),
        lng  = $('#vacation').attr('data-lng'),
        pos  = {name:name, lat:parseFloat(lat), lng:parseFloat(lng)};
    initMap(lat, lng, 2);
    addMarker(pos.lat, pos.lng, pos.name);
  });

  function addMarker(lat, lng, name){
    var latLng = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({map: map, position: latLng, title: name, animation: google.maps.Animation.DROP, icon: '/img/rainbow.gif'});
  }

  function initMap(lat, lng, zoom){
    var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
})();

