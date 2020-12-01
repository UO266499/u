class Mostrar{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }

    getPosicion(posicion){
        this.longi= posicion.coords.longitude; 
        this.lati= posicion.coords.latitude;  
    }

    getLat(){
        return this.lati;
    }

    getLon(){
        return this.longi;
    }

    
    leerArchivo(files){
        $("h2").remove();
        $("p").remove();
        var archivo = files[0];
        

        var opciones = {
            zoom: 9,
            center: {lat: this.lati, lng: this.longi},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(document.getElementById("map"), opciones);

        var marcador = new google.maps.Marker({
            position:{lat: this.lati , lng: this.longi},
            map:map,
            label:"Posición Actual"
        });

        var reader = new FileReader();
        
        var cortada;

        reader.onload = () => {
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
                        if (index === 1){
                            /*
                            var lat = this.lati;
                            var lon = this.longi
                            var R = 6378.137; //Radio de la tierra en km
                            var dLat = ( latitud - lat)*Math.PI/180;
                            var dLong = ( longitud - lon)*Math.PI/180;
                            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos((lat)*Math.PI/180) * Math.cos((lat2)*Math.PI/180) * Math.sin(dLong/2) * Math.sin(dLong/2);
                            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                            var d = R * c;

                            */

                            var texto = "La ruta comienza en " + name ;//+ ", situada a "+ d.toFixed(2) +" km.";
                            var inicio = $("<p></p>").text(texto);
                            $("#buscar").before(inicio);
                        }
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

        const canvas = document.getElementById('terreno');
        const cont = canvas.getContext('2d');

        cont.fillStyle = 'grey';
        cont.fillRect(0, 0, 1000, 1000);

        var p = $("<p></p>").text("Tipo del terreno inicial:");
        var p1 =$("<p></p>").text("Verde: Llanura");
        var p2 =$("<p></p>").text("Gris: Ciudad");
        var p3 =$("<p></p>").text("Azul: Maritimo");
        var p4 =$("<p></p>").text("Amarillo: Montañoso");

        $("#terreno").before(p);
        $("#terreno").before(p1);
        $("#terreno").before(p2);
        $("#terreno").before(p3);
        $("#terreno").before(p4);
    }

    getKilometros(lat2,lon2)
    {
        rad = function(x) {return x*Math.PI/180;}
        var R = 6378.137; //Radio de la tierra en km
        var dLat = rad( lat2 - this.lati );
        var dLong = rad( lon2 -this.longi );
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(this.lati)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d.toFixed(2);
    }
    
}

var mostrar = new Mostrar();
