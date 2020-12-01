class Leer{
    constructor(){
    }

    leerArchivo(files){
        var file = files[0];
        var fileType = file.type;
        if (fileType.match("text/xml")){
            this.mostrarXml(file);
        }else if (fileType.match("text/plain")){
            this.mostrarTxt(file);
        } else if (fileType.match(/json.*/)){
            this.mostrarJson(file);
        } else{
           this.mostrarPropiedadesOtroArchivo(file);
        }
    }


    mostrarXml(file){
        this.mostrarPropiedades(file);
        this.escribirArchivo(file);
    }

    mostrarTxt(file){
        this.mostrarPropiedades(file);
        this.escribirArchivo(file);
        
    }

    mostrarJson(file){
        this.mostrarPropiedades(file);
        this.escribirArchivo(file);
    }

    escribirArchivo(file){
        var reader = new FileReader();
        var archivo;
        reader.onload = function (evento) {
            archivo = reader.result;
            var value = $("<pre></pre>").text(archivo);
            $("#ultimop").after(value);
        }      
        reader.readAsText(file);
    }

    mostrarPropiedades(file) 
    { 
        $("pre").remove();
        $("p").remove();
        var nombre = $("<p></p>").text("Nombre: " + file.name);
        var tamaño = $("<p></p>").text("Tamaño: " + file.size + " bytes"); 
        var tipo = $("<p></p>").text("Tipo: " + file.type);
        var ultima  = $("<p></p>").text("Fecha de la última modificación: " + file.lastModifiedDate);
        var contenido =$("<p id='ultimop'></p>").text("Contenido:");
        
        $("#buscar").after(contenido);
        $("#buscar").after(ultima);
        $("#buscar").after(tipo);
        $("#buscar").after(tamaño);
        $("#buscar").after(nombre);
    };

    mostrarPropiedadesOtroArchivo(file){
        $("pre").remove();
        $("p").remove();
        var nombre = $("<p></p>").text("Nombre: " + file.name);
        var tamaño = $("<p></p>").text("Tamaño: " + file.size + " bytes"); 
        var tipo = $("<p></p>").text("Tipo: " + file.type);
        var ultima  = $("<p></p>").text("Fecha de la última modificación: " + file.lastModifiedDate);
        
        $("#buscar").after(ultima);
        $("#buscar").after(tipo);
        $("#buscar").after(tamaño);
        $("#buscar").after(nombre);
    }

}
var leer = new Leer();