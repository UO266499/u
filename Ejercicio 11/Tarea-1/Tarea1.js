class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.verPosicion.bind(this));
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
        if (this.longitud === null){
            this.longitud = "Desconocidos los";
        }
        if (this.getLatitud() === null){
            this.latitud = "Desconocidos los";
        }
        if (this.altitud === null){
            this.altitud = "Desconocidos los";
        }
        if (this.getPrecision() === null){
            this.precision = "Desconocidos los";
        }
    }

}
var geo = new GeoLocalizacion();
