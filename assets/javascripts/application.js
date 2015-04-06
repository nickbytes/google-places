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
        items.push('<li class="results-success" data-id="'+results[i].id+'">' + results[i].name + '<span class="results__rating"> - rating: ' + results[i].rating + '</span></li>');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1hcDtcbiAgdmFyIGluZm93aW5kb3c7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIHZhciBzYW5mcmFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NzQ5Mjk1LCAtMTIyLjQxOTQxNTUwMDAwMDAxKTtcblxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwge1xuICAgICAgY2VudGVyOiBzYW5mcmFuLFxuICAgICAgem9vbTogMTVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KGdlb0hlbHApIHtcblxuICAgIHZhciBsb2NhdGlvblR5cGUgPSAkKCcucGxhY2VfX3R5cGUnKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBzYW5mcmFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NzQ5Mjk1LCAtMTIyLjQxOTQxNTUwMDAwMDAxKTtcbiAgICB2YXIgcG9zaXRpb247XG5cbiAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgIGxvY2F0aW9uOiBnZW9IZWxwLFxuICAgICAgcmFkaXVzOiA1MDAsXG4gICAgICB0eXBlczogW2xvY2F0aW9uVHlwZV1cbiAgICB9O1xuXG4gICAgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCk7XG4gICAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UobWFwKTtcbiAgICBzZXJ2aWNlLm5lYXJieVNlYXJjaChyZXF1ZXN0LCBjYWxsYmFjayk7XG5cbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY2FudmFzJyksIHtcbiAgICAgIGNlbnRlcjogZ2VvSGVscCxcbiAgICAgIHpvb206IDE1XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb2RlQWRkcmVzcygpIHtcbiAgICB2YXIgYWRkcmVzcyA9ICQoJy5wbGFjZV9fbG9jYXRpb24nKS52YWwoKTtcbiAgICBnZW9jb2Rlci5nZW9jb2RlKCB7ICdhZGRyZXNzJzogYWRkcmVzc30sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3QocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnR2VvY29kZSB3YXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAnICsgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHJlc3VsdHMsIHN0YXR1cykge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHZhciBsaXN0ID0gJCgnLnBsYWNlc19fdWwnKTtcbiAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbXMucHVzaCgnPGxpIGNsYXNzPVwicmVzdWx0cy1zdWNjZXNzXCIgZGF0YS1pZD1cIicrcmVzdWx0c1tpXS5pZCsnXCI+JyArIHJlc3VsdHNbaV0ubmFtZSArICc8c3BhbiBjbGFzcz1cInJlc3VsdHNfX3JhdGluZ1wiPiAtIHJhdGluZzogJyArIHJlc3VsdHNbaV0ucmF0aW5nICsgJzwvc3Bhbj48L2xpPicpO1xuICAgICAgICBjcmVhdGVNYXJrZXIocmVzdWx0c1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zLnB1c2goJzxsaSBjbGFzcz1cInJlc3VsdHMtbm9uZVwiPk5vIHJlc3VsdHMgZm91bmQsIHNvcnJ5LjwvbGk+Jyk7XG4gICAgfVxuXG4gICAgbGlzdC5lbXB0eSgpO1xuICAgIGxpc3QuYXBwZW5kKCBpdGVtcy5qb2luKCcnKSApO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWFya2VyKHBsYWNlKSB7XG4gICAgdmFyIHBsYWNlTG9jID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb247XG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgbWFwOiBtYXAsXG4gICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24sXG4gICAgICBpY29uOiAnaHR0cDovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHN0PWRfbWFwX3Bpbl9sZXR0ZXImY2hsZD0lRTIlODAlQTJ8MzNjYzc3J1xuICAgIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGluZm93aW5kb3cuc2V0Q29udGVudChwbGFjZS5uYW1lKTtcbiAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMpO1xuICAgIH0pO1xuICB9XG5cblxuICAkKCcucGxhY2VfX3NlYXJjaCcpLmNsaWNrKGNvZGVBZGRyZXNzKTtcblxuICAkKCcucGxhY2VfX3R5cGUsIC5wbGFjZV9fbG9jYXRpb24nKS5rZXlwcmVzcyhmdW5jdGlvbihlKXtcbiAgICBpZiAoZS53aGljaCA9PSAxMyl7XG4gICAgICAkKCcucGxhY2VfX3NlYXJjaCcpLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=