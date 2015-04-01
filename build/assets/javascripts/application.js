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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1hcDtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIHZhciBweXJtb250ID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0MC42Njc1NzMsIC03My45ODk0MTMwMDAwMDAwMSk7XG5cbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIHtcbiAgICAgIGNlbnRlcjogcHlybW9udCxcbiAgICAgIHpvb206IDE1XG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgIGxvY2F0aW9uOiBweXJtb250LFxuICAgICAgcmFkaXVzOiA1MDAsXG4gICAgICB0eXBlczogWydjYWZlJ11cbiAgICB9O1xuXG4gICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UobWFwKTtcbiAgICBzZXJ2aWNlLm5lYXJieVNlYXJjaChyZXF1ZXN0LCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxsYmFjayhyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJCh3aW5kb3cpLmxvYWQoaW5pdGlhbGl6ZSk7XG5cbiAgLy9nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=