class Meteo {
    constructor(){
        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
        this.ciudad = "";
    }

    cargarDatos(header){
        this.url =  this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades + this.idioma + "&APPID=" + this.apikey;
        
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            
            success: function(data){
                
                meteo.datos = data;
                meteo.verJSON(header);
                meteo.verDatos();            
            },
            error:function(){
                document.write(meteo.error);    
            }
        });
    }

    verJSON(header){
        var header4 = $("<h4></h4>").text("JSON");
        $(header).after(header4); 
        var str = JSON.stringify(meteo.datos, null, 2);
        var json = $("<pre>" + str + "</pre>");
        $("h4").after(json);
    }

    verDatos(){
        var datos = $("<h5></h5>").text("Datos");
        $("pre").after(datos);
        var datos1= $("<p></p>").text("Ciudad: " + meteo.datos.name);
        var datos2= $("<p></p>").text("País: " + meteo.datos.sys.country );
        var datos3= $("<p></p>").text("Latitud: " + meteo.datos.coord.lat + " grados");
        var datos4= $("<p></p>").text("Longitud: " + meteo.datos.coord.lon + " grados");
        var datos5= $("<p></p>").text("Temperatura: " + meteo.datos.main.temp + " grados Celsius");
        var datos6= $("<p></p>").text("Temperatura máxima: " + meteo.datos.main.temp_max + " grados Celsius"); 
        var datos7= $("<p></p>").text("Temperatura mínima: " + meteo.datos.main.temp_min + " grados Celsius"); 
        var datos8= $("<p></p>").text("Presión: " + meteo.datos.main.pressure + " milímetros"); 
        var datos9= $("<p></p>").text("Humedad: " + meteo.datos.main.humidity + "%"); 
        var datos10= $("<p></p>").text("Amanece a las: " + new Date(meteo.datos.sys.sunrise *1000)); 
        var datos11= $("<p></p>").text("Oscurece a las: " + new Date(meteo.datos.sys.sunset *1000)); 
        var datos12= $("<p></p>").text("Dirección del viento: " + meteo.datos.wind.deg + "  grados"); 
        var datos13= $("<p></p>").text("Velocidad del viento: " + meteo.datos.wind.speed + " metros/segundo"); 
        var datos14= $("<p></p>").text("Hora de la medida: " + new Date(meteo.datos.dt *1000)); 
        var datos15= $("<p></p>").text("Fecha de la medida: " + new Date(meteo.datos.dt *1000)); 
        var datos16= $("<p></p>").text("Descripción: " + meteo.datos.weather[0].description); 
        var datos17= $("<p></p>").text("Visibilidad: " + meteo.datos.visibility + " metros"); 
        var datos18= $("<p></p>").text("Nubosidad: " + meteo.datos.clouds.all + " %"); 

        $("h5").after(datos18);
        $("h5").after(datos17);
        $("h5").after(datos16);
        $("h5").after(datos15);
        $("h5").after(datos14);
        $("h5").after(datos13);
        $("h5").after(datos12);
        $("h5").after(datos11);
        $("h5").after(datos10);
        $("h5").after(datos9);
        $("h5").after(datos8);
        $("h5").after(datos7);
        $("h5").after(datos6);
        $("h5").after(datos5);
        $("h5").after(datos4);
        $("h5").after(datos3);
        $("h5").after(datos2);
        $("h5").after(datos1);

        var icono = "icons/" + meteo.datos.weather[0].icon+ ".png";

        var imagen = $("<img src="+icono+">");

        $("h5").after(imagen);
    }

    verUnquera(){
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
        $("img").remove();
        $("pre").remove();
        this.ciudad = "Unquera";
        this.cargarDatos("h1");
        $("#Unquera").hide();
        $("#Cangas").show();
        $("#Ribadesella").show();
    }

    verCangas(){
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
        $("img").remove();
        $("pre").remove();
        this.ciudad = "Cangas de Onís";
        this.cargarDatos("h2");
        $("#Unquera").show();
        $("#Cangas").hide();
        $("#Ribadesella").show();
    }

    verRibadesella(){
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
        $("img").remove();
        $("pre").remove();
        this.ciudad = "Ribadesella";
        this.cargarDatos("h3");
        $("#Unquera").show();
        $("#Cangas").show();
        $("#Ribadesella").hide();
    }

}
var meteo = new Meteo();
