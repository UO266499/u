class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.verPosicion.bind(this),this.mostrarError.bind(this));
    }

    verPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.altitud          = posicion.coords.altitude; 
        this.precision        = posicion.coords.accuracy;
        this.checkParametros();
    }

    getLongitud(){
        return this.longitud;
    }

    getLatitud(){
        return this.latitud;
    }

    getAltitud(){
        return this.altitud;
    }
    
    getPrecision(){
        return this.precision;
    }

    mostrarError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización";
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible";
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado";
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido";
                break;
            default:
                this.mensaje = "Se ha encontrado un error";
                break;
            }
            
    }

    verCoordenadas(){

        $("p").remove();

        var lon  = $("<p></p>").text(("Longitud: "+ this.getLongitud() +" grados")); 
        var lat  = $("<p></p>").text(("Latitud: "+ this.getLatitud() +" grados"));
        var alt  = $("<p></p>").text(("Altitud: "+ this.getAltitud() +" metros"));
        var prec = $("<p></p>").text(("Precisión: "+ this.getPrecision() +" metros"));

        $("#buscar").after(prec);
        $("#buscar").after(alt);
        $("#buscar").after(lon);
        $("#buscar").after(lat);
        $("#buscar").hide();
    }

    checkParametros(){
        if (this.longitud === null || this.longitud === undefined){
            this.longitud = "Desconocidos los";
        }
        if (this.latitud === null|| this.latitud === undefined){
            this.latitud = "Desconocidos los";
        }
        if (this.altitud === null|| this.altitud === undefined){
            this.altitud = "Desconocidos los";
        }
        if (this.precision === null|| this.precision === undefined){
            this.precision = "Desconocidos los";
        }
    }

}
var geo = new GeoLocalizacion();

   