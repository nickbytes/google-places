// javascript
(function() {

  var map;
  var infowindow;

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

    infowindow = new google.maps.InfoWindow();
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
        items.push('<li class="results-success">' + results[i].name + '<span class="results__rating"> - rating: ' + results[i].rating + '</span></li>');
        createMarker(results[i]);
      }
    } else {
      items.push('<li class="results-none">No results found, sorry.</li>');
    }

    list.empty();
    list.append( items.join('') );
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|33cc77'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }


  $('.place__search').click(codeAddress);

  $('.place__type, .place__location').keypress(function(e){
    if (e.which == 13){
      $('.place__search').click();
    }
  });

  google.maps.event.addDomListener(window, 'load', initialize);

})();
