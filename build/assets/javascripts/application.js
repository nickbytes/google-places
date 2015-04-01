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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1hcDtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIHZhciBzYW5mcmFuID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NzQ5Mjk1LCAtMTIyLjQxOTQxNTUwMDAwMDAxKTtcblxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwge1xuICAgICAgY2VudGVyOiBzYW5mcmFuLFxuICAgICAgem9vbTogMTVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KCkge1xuICAgIHZhciBsb2NhdGlvblR5cGUgPSAkKCcucGxhY2VfX3R5cGUnKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIHNhbmZyYW4gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc3NDkyOTUsIC0xMjIuNDE5NDE1NTAwMDAwMDEpO1xuXG4gICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICBsb2NhdGlvbjogc2FuZnJhbixcbiAgICAgIHJhZGl1czogNTAwLFxuICAgICAgdHlwZXM6IFtsb2NhdGlvblR5cGVdXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QudHlwZXMpO1xuXG5cbiAgICB2YXIgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShtYXApO1xuICAgIHNlcnZpY2UubmVhcmJ5U2VhcmNoKHJlcXVlc3QsIGNhbGxiYWNrKTtcblxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSwge1xuICAgICAgY2VudGVyOiBzYW5mcmFuLFxuICAgICAgem9vbTogMTVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHJlc3VsdHMsIHN0YXR1cykge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHZhciBsaXN0ID0gJCgnLnBsYWNlc19fdWwnKTtcbiAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhdHVzIE9LJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0c1tpXS5uYW1lKTtcbiAgICAgICAgaXRlbXMucHVzaCgnPGxpPicgKyByZXN1bHRzW2ldLm5hbWUgKyAnPC9saT4nKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhdHVzOiAnICsgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICBsaXN0LmFwcGVuZCggaXRlbXMuam9pbignJykgKTtcbiAgfVxuXG4gICQoJy5wbGFjZV9fc2VhcmNoJykuY2xpY2sobWFrZVJlcXVlc3QpO1xuXG4gICQod2luZG93KS5sb2FkKGluaXRpYWxpemUpO1xuXG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9