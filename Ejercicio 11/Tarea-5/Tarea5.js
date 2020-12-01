var mapaDinamicoGoogle = new Object();

function getLocation() {
    navigator.geolocation.getCurrentPosition(initMap);
}

function initMap(posicion){
    var lugar = {lat: posicion.coords.latitude, lng: posicion.coords.longitude};
    var mapalugar = new google.maps.Map(document.getElementById('mapa'),{zoom: 15,center:lugar});
    var marcador = new google.maps.Marker({position:lugar,map:mapalugar});
}
mapaDinamicoGoogle.location = getLocation;