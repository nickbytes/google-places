// javascript
(function() {

  var map;

  function initialize() {
    var pyrmont = new google.maps.LatLng(40.667573, -73.98941300000001);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: pyrmont,
      zoom: 15
    });

    var request = {
      location: pyrmont,
      radius: 500,
      types: ['cafe']
    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
      }
    }
  }

  $(window).load(initialize);

  //google.maps.event.addDomListener(window, 'load', initialize);

})();
