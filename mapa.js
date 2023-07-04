let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}

var position = [27.1959739, 78.02423269999997];

    function initialize() {
      var myOptions = {
        zoom: 17,
        streetViewControl: true,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('googlemaps'),
        myOptions);
      latLng = new google.maps.LatLng(position[0], position[1]);
      map.setCenter(latLng);
      marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);