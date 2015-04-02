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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1hcDtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgdmFyIHNhbmZyYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc3NDkyOTUsIC0xMjIuNDE5NDE1NTAwMDAwMDEpO1xuXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNhbnZhcycpLCB7XG4gICAgICBjZW50ZXI6IHNhbmZyYW4sXG4gICAgICB6b29tOiAxNVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVJlcXVlc3QoZ2VvSGVscCkge1xuXG4gICAgdmFyIGxvY2F0aW9uVHlwZSA9ICQoJy5wbGFjZV9fdHlwZScpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHNhbmZyYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc3NDkyOTUsIC0xMjIuNDE5NDE1NTAwMDAwMDEpO1xuICAgIHZhciBwb3NpdGlvbjtcblxuICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgbG9jYXRpb246IGdlb0hlbHAsXG4gICAgICByYWRpdXM6IDUwMCxcbiAgICAgIHR5cGVzOiBbbG9jYXRpb25UeXBlXVxuICAgIH07XG5cbiAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShtYXApO1xuICAgIHNlcnZpY2UubmVhcmJ5U2VhcmNoKHJlcXVlc3QsIGNhbGxiYWNrKTtcblxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwge1xuICAgICAgY2VudGVyOiBnZW9IZWxwLFxuICAgICAgem9vbTogMTVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVBZGRyZXNzKCkge1xuICAgIHZhciBhZGRyZXNzID0gJCgnLnBsYWNlX19sb2NhdGlvbicpLnZhbCgpO1xuICAgIGdlb2NvZGVyLmdlb2NvZGUoIHsgJ2FkZHJlc3MnOiBhZGRyZXNzfSwgZnVuY3Rpb24ocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnR2VvY29kZSB3YXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAnICsgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gIH1cblxuICBmdW5jdGlvbiBjYWxsYmFjayhyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB2YXIgbGlzdCA9ICQoJy5wbGFjZXNfX3VsJyk7XG4gICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goJzxsaT4nICsgcmVzdWx0c1tpXS5uYW1lICsgJzwvbGk+Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zLnB1c2goJzxsaT5ObyByZXN1bHRzIGZvdW5kLCBzb3JyeS48L2xpPicpO1xuICAgIH1cblxuICAgIGxpc3QuZW1wdHkoKTtcbiAgICBsaXN0LmFwcGVuZCggaXRlbXMuam9pbignJykgKTtcbiAgfVxuXG4gICQoJy5wbGFjZV9fc2VhcmNoJykuY2xpY2soY29kZUFkZHJlc3MpO1xuXG4gICQod2luZG93KS5sb2FkKGluaXRpYWxpemUpO1xuXG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9