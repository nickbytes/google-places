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
        console.log(results[i]);
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
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  $('.place__search').click(codeAddress);

  $(window).load(initialize);

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1hcDtcbiAgdmFyIGluZm93aW5kb3c7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIHZhciBzYW5mcmFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NzQ5Mjk1LCAtMTIyLjQxOTQxNTUwMDAwMDAxKTtcblxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwge1xuICAgICAgY2VudGVyOiBzYW5mcmFuLFxuICAgICAgem9vbTogMTVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KGdlb0hlbHApIHtcblxuICAgIHZhciBsb2NhdGlvblR5cGUgPSAkKCcucGxhY2VfX3R5cGUnKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBzYW5mcmFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NzQ5Mjk1LCAtMTIyLjQxOTQxNTUwMDAwMDAxKTtcbiAgICB2YXIgcG9zaXRpb247XG5cbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgIGxvY2F0aW9uOiBnZW9IZWxwLFxuICAgICAgcmFkaXVzOiA1MDAsXG4gICAgICB0eXBlczogW2xvY2F0aW9uVHlwZV1cbiAgICB9O1xuXG4gICAgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XG4gICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UobWFwKTtcbiAgICBzZXJ2aWNlLm5lYXJieVNlYXJjaChyZXF1ZXN0LCBjYWxsYmFjayk7XG5cbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIHtcbiAgICAgIGNlbnRlcjogZ2VvSGVscCxcbiAgICAgIHpvb206IDE1XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb2RlQWRkcmVzcygpIHtcbiAgICB2YXIgYWRkcmVzcyA9ICQoJy5wbGFjZV9fbG9jYXRpb24nKS52YWwoKTtcbiAgICBnZW9jb2Rlci5nZW9jb2RlKCB7ICdhZGRyZXNzJzogYWRkcmVzc30sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb2NvZGUgd2FzIG5vdCBzdWNjZXNzZnVsIGZvciB0aGUgZm9sbG93aW5nIHJlYXNvbjogJyArIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxsYmFjayhyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB2YXIgbGlzdCA9ICQoJy5wbGFjZXNfX3VsJyk7XG4gICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHNbaV0pO1xuICAgICAgICBpdGVtcy5wdXNoKCc8bGkgY2xhc3M9XCJyZXN1bHRzLXN1Y2Nlc3NcIj4nICsgcmVzdWx0c1tpXS5uYW1lICsgJzxzcGFuIGNsYXNzPVwicmVzdWx0c19fcmF0aW5nXCI+IC0gcmF0aW5nOiAnICsgcmVzdWx0c1tpXS5yYXRpbmcgKyAnPC9zcGFuPjwvbGk+Jyk7XG4gICAgICAgIGNyZWF0ZU1hcmtlcihyZXN1bHRzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMucHVzaCgnPGxpIGNsYXNzPVwicmVzdWx0cy1ub25lXCI+Tm8gcmVzdWx0cyBmb3VuZCwgc29ycnkuPC9saT4nKTtcbiAgICB9XG5cbiAgICBsaXN0LmVtcHR5KCk7XG4gICAgbGlzdC5hcHBlbmQoIGl0ZW1zLmpvaW4oJycpICk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYXJrZXIocGxhY2UpIHtcbiAgICB2YXIgcGxhY2VMb2MgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbjtcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBtYXA6IG1hcCxcbiAgICAgIHBvc2l0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvblxuICAgIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGluZm93aW5kb3cuc2V0Q29udGVudChwbGFjZS5uYW1lKTtcbiAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgJCgnLnBsYWNlX19zZWFyY2gnKS5jbGljayhjb2RlQWRkcmVzcyk7XG5cbiAgJCh3aW5kb3cpLmxvYWQoaW5pdGlhbGl6ZSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=