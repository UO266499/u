var mapaDinamicoGoogle = new Object();
function initMap(){
    var aviles = {lat: 43.5549531, lng: -5.9216461};
    var mapaAviles = new google.maps.Map(document.getElementById('mapa'),{zoom: 15,center:aviles});
    var marcador = new google.maps.Marker({position:aviles,map:mapaAviles});
}
mapaDinamicoGoogle.initMap = initMap;