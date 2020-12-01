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

            cortada = result.split("<name>");

            for (let index = 1; index < cortada.length; index++) {
                const element = cortada[index];
                if (index === 1 ){
                    var titulo = $("<h2></h2>").text("Nombre asignado en el .kml: " + element.split("</name>")[0]);
                    $("h1").after(titulo);
                }else if (index < cortada.length-1){
                    var numero = index-2;
                    var marker = $("<p></p>").text("Nombre del hito número " + numero+" : "+ element.split("</name>")[0]);
                    $("#buscar").before(marker);

                    let latitud = parseFloat(element.split("<latitude>")[1].split("</latitude>")[0]);
                    let longitud= parseFloat(element.split("<longitude>")[1].split("</longitude>")[0]);
                    var marcador = new google.maps.Marker({
                        position:{lat: latitud, lng: longitud},
                        map:map,
                        label:element.split("</name>")[0]
                    });
                }else if (index === cortada.length-1){
                    var coordenadas = element.split("<coordinates>")[1].split("</coordinates>")[0].split(" ");
                    
                    const coordinates = [];
                    
                    for (let index = 0; index < coordenadas.length-2; index++) {
                        const element = coordenadas[index];
                        var longitud = parseFloat(element.split(",")[0]);
                        var latitud =  parseFloat(element.split(",")[1]);
                        coordinates.push({ lat: latitud, lng: longitud});
                    }

                    const path = new google.maps.Polyline({
                        path: coordinates,
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
