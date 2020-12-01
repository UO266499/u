class Meteo {
    constructor(){

        this.apikey = "727c660ef8c103988af4f1a03eebdf3c";
        this.ciudad = "Avilés";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>"

    }



    cargarDatos(){
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
           
            success: function(datos){
                    
                    //Presentación del archivo XML en modo texto 
                    $("h8").text((new XMLSerializer()).serializeToString(datos));
                
                    //Extracción de los datos contenidos en el XML
                    var totalNodos            = $('*',datos).length; // cuenta los elementos de XML: son los nodos del árbol DOM de XML
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                        amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                        oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var temperaturaUnit       = $('temperature',datos).attr("unit");
                    var humedad               = $('humidity',datos).attr("value");
                    var humedadUnit           = $('humidity',datos).attr("unit");
                    var presion               = $('pressure',datos).attr("value");
                    var presionUnit           = $('pressure',datos).attr("unit");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var nombreViento          = $('speed',datos).attr("name");
                    var direccionViento       = $('direction',datos).attr("value");
                    var codigoViento          = $('direction',datos).attr("code");
                    var nombreDireccionViento = $('direction',datos).attr("name");
                    var nubosidad             = $('clouds',datos).attr("value");
                    var nombreNubosidad       = $('clouds',datos).attr("name");
                    var visibilidad           = $('visibility',datos).attr("value");
                    var precipitacionValue    = $('precipitation',datos).attr("value");
                    var precipitacionMode     = $('precipitation',datos).attr("mode");
                    var descripcion           = $('weather',datos).attr("value");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    
                    var stringDatos =  "<ul><li>Número de elementos del XML: " + totalNodos + "</li>";
                        stringDatos += "<li>Ciudad: " + ciudad + "</li>";
                        stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                        stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                        stringDatos += "<li>País: " + pais + "</li>";
                        stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                        stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                        stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                        stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                        stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                        stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                        stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                        stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                        stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                        stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                        stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                        stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                        stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                        stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                        stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                        stringDatos += "<li>Descripción: " + descripcion + "</li>";
                        stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>"
                    $("p").html(stringDatos);         
                    
                    var name = $('weather',datos).attr("icon");
                    var icono = "icons/" + name+ ".png";

                    var imagen = $("<img src="+icono+">");

                    $("p").after(imagen);
                    
                },
            error:function(){
                $("h6").html("¡Tenemos problemas! No puedo obtener XML de <a href='"+this.url+"'>OpenWeatherMap</a>"); 
                document.write(this.url);
                $("h6").remove();
                $("h7").remove();
                $("p").remove();
                $("img").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el árbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verXML(ciud){
        this.ciudad = ciud;
        $("h6").remove();
        $("h7").remove();
        $("h8").remove();
        $("h9").remove();
        $("p").remove();
        $("img").remove();
        //Muestra el archivo JSON recibido
        this.crearElemento("h6","Tiempo en " + ciud +":","footer");
        this.crearElemento("h7","Vista del XML recibido","footer"); // Crea un elemento con DOM        
        this.crearElemento("h8","","footer"); // Crea un elemento con DOM para el string con XML
        this.crearElemento("h9","<br><br>DATOS:","footer"); // Crea un elemento con DOM 
        this.crearElemento("p","","footer"); // Crea un elemento con DOM para los datos obtenidos con XML
        this.cargarDatos();
    }
}
var meteo = new Meteo();
