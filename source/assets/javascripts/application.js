// javascript
(function() {

  var map;

  function initialize() {
    var sanfran = new google.maps.LatLng(37.7749295, -122.41941550000001);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: sanfran,
      zoom: 15
    });
  }

  function makeRequest() {
    var locationType = $('.place__type').val().toLowerCase();

    var sanfran = new google.maps.LatLng(37.7749295, -122.41941550000001);

    var request = {
      location: sanfran,
      radius: 500,
      types: [locationType]
    };

    console.log(request.types);


    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: sanfran,
      zoom: 15
    });
  }

  function callback(results, status) {
    var items = [];
    var list = $('.places__ul');
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log('Status OK');
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].name);
        items.push('<li>' + results[i].name + '</li>')
      }
    } else {
      console.log('Status: ' + status);
    }

    console.log(list);
    list.append( items.join('') );
  }

  $('.place__search').click(makeRequest);

  $(window).load(initialize);

})();
