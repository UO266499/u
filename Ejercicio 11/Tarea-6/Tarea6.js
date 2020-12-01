var mapaDinamicoGoogle = new Object();

function getLocation() {
    navigator.geolocation.getCurrentPosition(initMap);
}

function initMap(posicion){
    var lon = posicion.coords.longitude;
    if(lon < 0){
        lon+= 180;
    }else if (lon>0){
        lon -= 180;
    }
    var lugar = {lat: -posicion.coords.latitude, lng: lon};

    var mapalugar = new google.maps.Map(document.getElementById('mapa'),{zoom: 3.1,center:{lat: 0, lng: (posicion.coords.longitude+lon)/2}});

    var marcadorAntipoda = new google.maps.Marker({
        position:lugar,
        map:mapalugar,
        icon: {
            url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        },
        label:"Antípoda"
        
    });
    var marcadorActual = new google.maps.Marker({
            position:{lat: posicion.coords.latitude, lng: posicion.coords.longitude},
            map:mapalugar,
            icon: {
                url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            },
            label:"Lugar actual"
    });
}
mapaDinamicoGoogle.location = getLocation;