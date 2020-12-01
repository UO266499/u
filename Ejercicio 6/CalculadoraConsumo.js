function isNumber(evt) {
    // Recibir un evento (en este caso una presión de teclado)
    evt = (evt) ? evt : window.event;
    // Mirar que el caracter sea un número
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function calcularResultados(){
    document.getElementById("resultadoDia").value = this.calcularGastoDia();
    document.getElementById("resultadoMes").value = 30 * this.calcularGastoDia();
                                                    // Litros a metros cubicos * coste medio del litro cubico * 1.27 (precio medio en Asturias)
    document.getElementById("costeMensual").value = (Math.round(((30 * this.calcularGastoDia()) * 0.001 * 1.27)*100 )/100 )+ "‎ €";
}

function calcularGastoDia(){
    var numeroPersonas = document.getElementById("numeroPersonas").value;
    var numeroDuchas = document.getElementById("numeroDuchas").value;
    var tiempoDuchas = document.getElementById("tiempoDuchas").value;
    var numeroBaños = document.getElementById("numeroBaños").value;
    var tiempoBaños = document.getElementById("tiempoBaños").value;
    var numeroLavadoDientes = document.getElementById("numeroLavadoDientes").value;
    var vecesInodoro = document.getElementById("vecesInodoro").value;
    var vecesOtros = document.getElementById("vecesOtros").value;
    var vecesBeber = document.getElementById("vecesBeber").value;
    var vecesGrifo = document.getElementById("vecesGrifo").value;
    var numeroLavavajillas = document.getElementById("numeroLavavajillas").value;
    var numeroCubos = document.getElementById("numeroCubos").value;

    var estLitroMinDucha = 9;
    var estLitroBano = 135; // Estimado llenar la bañera a la mitad
    var estLavarDientes = 2;
    var estCisterna= 5;
    var estLitroOtros = 3;
    var estLavavajillas = 10;
    var estVecesGrifo = 9;
    var estCubo = 10;

    var calculoBanos;
    if (numeroBaños != '' && numeroBaños != 0){
        calculoBanos = numeroBaños * tiempoBaños * estVecesGrifo;
    }else{
        calculoBanos = numeroBaños * estLitroBano;
    }
    

    //Suponemos que cosas comunales como lavar platos, fregar se hace solo una vez, no una vez cada personas

    var calculoSemanal = numeroPersonas * (
                                            (numeroDuchas * tiempoDuchas *estLitroMinDucha) +
                                            (calculoBanos) +
                                            (numeroLavadoDientes * estLavarDientes * 7) +
                                            (vecesInodoro * estCisterna * 7) +
                                            (vecesOtros * estLitroOtros * 7) +
                                            (vecesBeber * 7)
                                        ) 
                                        + 
                                        (vecesGrifo*estVecesGrifo * 7) +
                                        (numeroLavavajillas * estLavavajillas) + (numeroCubos * estCubo);
    return Math.round(calculoSemanal/7);
}