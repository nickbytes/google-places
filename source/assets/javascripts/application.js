// javascript
(function() {

  var map;

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var sanfran = new google.maps.LatLng(37.7749295, -122.41941550000001);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: sanfran,
      zoom: 15
    });
  }

  function makeRequest(geoHelp) {

    var locationType = $('.place__type').val().toLowerCase();
    var sanfran = new google.maps.LatLng(37.7749295, -122.41941550000001);
    var position;

    var request = {
      location: geoHelp,
      radius: 500,
      types: [locationType]
    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: geoHelp,
      zoom: 15
    });
  }

  function codeAddress() {
    var address = $('.place__location').val();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location);
        return makeRequest(results[0].geometry.location);
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });


  }

  function callback(results, status) {
    var items = [];
    var list = $('.places__ul');
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        items.push('<li>' + results[i].name + '</li>');
      }
    } else {
      items.push('<li>No results found, sorry.</li>');
    }

    list.empty();
    list.append( items.join('') );
  }

  $('.place__search').click(codeAddress);

  $(window).load(initialize);

})();
