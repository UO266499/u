
class Ocultar{
    
    ocultarH1(){
        $(function(){
            $("h1").hide();
        });
    }

    borrarParrafos(){
        $(function(){
            $("p").remove();
            $("#borrarParrafos").remove();
        });

    }

        
    eliminarFooter(){
        $(function(){
            $("#footer").remove();

            var crearFooter = $("<button id='crearFooter' onclick='mostrar.crearFooter()'></button>").text("Crear Footer");
            $("#eliminarFooter").after(crearFooter);
            $("#eliminarFooter").hide();
            
            // <button  id="crearFooter"  onclick="mostrar.crearFooter()">Crear footer</button>
        });
    }
       
    ocultarCrearFooter(){
            $("#crearFooter").hide();
    }
}

class Mostrar{

    mostrarH1(){
        $(function(){
            $("h1").show();
        });
    }

    modificarHeader1(){
        $(function(){
            $("h2").append(". Sí, sí lo soy");
        });
    }

    crearHeader(){
        $(function(){
            var header4 = $("<h4></h4>").text("Soy el cuarto header creado con JQuery!");

            $("h3").after(header4);
        });
    }

    crearFooter(){
            $(function(){
               var footer =  $("<footer id='footer'></footer>")
               .html("<a href='http://validator.w3.org/check/referer' hreflang='en-us'> <img  src='valid-html5-button.png' alt='¡HTML5 válido!'/></a>");
               $("#eliminarFooter").show();
               $("#crearFooter").hide();
               $("#antesFooter").after(footer);
            });
        
    }

    mostrarEtiquetas(){
        $(function(){
            $("*", document.body).each(function() {
                var padre = $(this).parent().get(0).tagName;
                $(this).append(document.createTextNode( " el elemento padre es:"  + padre + " el tipo de elemento HTML: " + $(this).get(0).tagName));
            });
        });
    }

    sumaColumnasYFilas(){
        var numeroFilas = -1; // no contamos la primera fila con la descripcion de la tabla
        $("table tr").each(function() {
            numeroFilas++;
        });

        var numeroColumnas= 0; 
        $("table tr th").each(function() {
            numeroColumnas++;
        });

        var total = numeroColumnas + numeroFilas;
        $("#sumaColumnasYFilas").val(("Columnas: "+numeroColumnas+" + Filas: "+ numeroFilas + " = " + total));
    }

}

var ocultar = new Ocultar();
var mostrar = new Mostrar();