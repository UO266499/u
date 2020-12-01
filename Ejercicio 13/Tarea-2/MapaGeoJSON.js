class Mostrar{
    constructor(){

    }

    leerArchivo(files){
        $("h2").remove();
        $("p").remove();
        var archivo = files[0];
        
        var opciones = {
            zoom: 12,
            center: {lat: 43.3968388, lng: -5.0955068},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(document.getElementById("map"), opciones);

        var reader = new FileReader();
        
        var cortada;
        reader.onload = function (evento) {
            var result = reader.result;

            cortada = result.split("properties");
            
            for (let index = 0; index < cortada.length; index++) {
                const element = cortada[index];
                if(index < cortada.length-1){
                    var cor = element.split("name")[1];
                    if (cor !== undefined){
                        var name = cor.split("\"")[2]
                        var latitud = parseFloat(cor.split("[")[1].split(",")[1].split("]")[0]);
                        var longitud =  parseFloat(cor.split("[")[1].split(",")[0]);
                        var marcador = new google.maps.Marker({
                            position:{lat: latitud, lng: longitud},
                            map:map,
                            label:name
                        });
                    }
                }else{
                    var coordinates = element.split(":")[4];
                    var latlong = coordinates.split("[");
                    const coordi = [];

                    for (let index = 2; index < latlong.length; index++) {
                        const element = latlong[index];
                        var coords = element.split("]");
                        var long = parseFloat(coords[0].split(",")[0]);
                        var lati = parseFloat(coords[0].split(",")[1]);
                        coordi.push({ lat: lati, lng: long});
                    }

                    const path = new google.maps.Polyline({
                        path: coordi,
                        geodesic: true,
                        strokeColor: "#e90a0a",
                        strokeOpacity: 1.0,
                        strokeWeight: 4,
                        map:map
                    });
                }
            }

        }
        reader.readAsText(archivo);

    }
    

}
var mostrar = new Mostrar();
