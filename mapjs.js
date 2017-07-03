  var map;

  var casa = '<h1>Home Town (Citta Borgetto)</h1><img src="Images/Borgetto.jpg">';

  var club = '<h1>Baia Le Grotte</h1><p>Popular Night Club on the Beach</p><img src="Images/Legrotte.jpg">';

  var skyCastle='<h1>Erice</h1><p> Castle di Venere-located on Mountain Peak</p><img src="Images/erice.jpg">';

  var Beach = '<h1>Balestrate Beach</h1><p>Popular local Beach</p><img src="Images/Balestrate.jpg">';

  var Cafe = '<h1>Burgnano Cafe</h1><p>Local Cafe</p><img src="Images/Brugnano.jpg">';

  var gelato ='<h1>Case del Gelato</h1><p>Favorite ice cream shop</p><img src="Images/gelato.jpg">';

  var deli ='<h1>Salumeria Patti</h1><p> Best deli in town</P><img src="Images/patti.jpg">';

  function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.044530, lng: 13.141070},
        scrollwheel: true,
        zoom: 9,
        mapTypeId: 'hybrid',
        });

        var BorgettoMarker = new google.maps.Marker({
          position: {lat: 38.044530, lng: 13.141070},
          map: map,
          title: 'Casa',
          animation: google.maps.Animation.DROP
        });

        var Borgetto = new google.maps.InfoWindow({
          content: casa 
          });

        BorgettoMarker.addListener('click', function() {
          Borgetto.open(map, BorgettoMarker);

          setTimeout(function () { Casa.close(); }, 8000);
          });

        var BaiaLeGrotte = new google.maps.Marker({
          position: {lat: 38.048549, lng: 12.999021},
          map: map,
          title: 'Baia Le Grotte',
          animation: google.maps.Animation.DROP
        });

        var LeGrotte = new google.maps.InfoWindow({
          content: club
          });

          BaiaLeGrotte.addListener('click', function() {
          LeGrotte.open(map, BaiaLeGrotte);

          setTimeout(function () { LeGrotte.close(); }, 8000);
          });

        var EriceMarker = new google.maps.Marker({
          position: {lat: 38.035361, lng: 12.592561},
          map: map,
          title: 'Erice',
          animation: google.maps.Animation.DROP
        });

        var Erice = new google.maps.InfoWindow({
          content: skyCastle
          });

          EriceMarker.addListener('click', function() {
          Erice.open(map, EriceMarker);

          setTimeout(function () { Erice.close(); }, 8000);
          });

          var BalestrateMarker = new google.maps.Marker({
          position: {lat: 38.046196, lng: 12.994968},
          map: map,
          title: 'Balestrate Beach',
          animation: google.maps.Animation.DROP
        });

        var Balestrate = new google.maps.InfoWindow({
          content: Beach
          });

          BalestrateMarker.addListener('click', function() {
          Balestrate.open(map, BalestrateMarker);

          setTimeout(function () { Balestrate.close(); }, 8000);
          });


          var BrugnanoMarker = new google.maps.Marker({
          position: {lat: 38.072130, lng: 13.093335},
          map: map,
          title: 'Brugnano Cafe',
          animation: google.maps.Animation.DROP
        });

        var Brugnano = new google.maps.InfoWindow({
          content: Cafe
          });

          BrugnanoMarker.addListener('click', function() {
          Brugnano.open(map, BrugnanoMarker);

          setTimeout(function () { Brugnano.close(); }, 8000);
          });


          var GelatoMarker = new google.maps.Marker({
          position: {lat: 38.045599, lng: 13.122317},
          map: map,
          title: 'Case del Gelato',
          animation: google.maps.Animation.DROP
        });

        var Gelato = new google.maps.InfoWindow({
          content: gelato
          });

          GelatoMarker.addListener('click', function() {
          Gelato.open(map, GelatoMarker);

          setTimeout(function () { Gelato.close(); }, 8000);
          });


           var SalumeriaMarker = new google.maps.Marker({
          position: {lat: 38.047247, lng: 13.142773},
          map: map,
          title: 'Salumeria Patti',
          animation: google.maps.Animation.DROP
        });

        var Salumeria = new google.maps.InfoWindow({
          content: deli
          });

          SalumeriaMarker.addListener('click', function() {
          Salumeria.open(map, SalumeriaMarker);

          setTimeout(function () { Salumeria.close(); }, 8000);
          });

}
      