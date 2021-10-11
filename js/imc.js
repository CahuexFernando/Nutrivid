function IMC(elEvento){
    elEvento.preventDefault();

    var Edad = document.querySelector("#Edad").value;
    var peso = document.querySelector("#PesoA").value;
    var altura =document.querySelector("#Altura1").value;
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    var formula = peso/(altura*altura);
    

    // Medidas de un adulto.

   if(formula < 18.5){
        respuestas.innerHTML = '<p class =Pri_imc >  Bajo peso - IMC  '  +  formula.toFixed(1) + '</p> ' + 
        '<div class="list_1"> <STYLE>A {text-decoration: none;} </STYLE> <a href="BajoPeso.html"> Leer más </a> </div> ';
    } else if (formula >18.5 & formula< 24.9){
        respuestas.innerHTML = '<p class =Pri_imc_2 > Peso normal - IMC  '  +  formula.toFixed(1) + '</p> ' + 
        ' <div class="list_2"> <STYLE>A {text-decoration: none;} </STYLE> <a href="Saludable.html"> Leer más </a> </div>';

    }else if (formula > 25 & formula< 29.9 ){
        respuestas.innerHTML = '<p class =Pri_imc_3 > Sobrepeso - IMC  '  +  formula.toFixed(1) + '</p> ' +  
        '<div class="list_3"> <STYLE>A {text-decoration: none;} </STYLE> <a href="Sobrepeso.html"> Leer más </a> </div>';

    }else if (formula > 30 & formula< 39.9){
        respuestas.innerHTML =  '<p class =Pri_imc_4 > Obesidad- IMC  '  +  formula.toFixed(1) + '</p> ' + 
        '<div class="list_3"> <STYLE>A {text-decoration: none;} </STYLE> <a href="Obesidad.html"> Leer más </a> </div>';

    }else if (formula >= 40){
        respuestas.innerHTML = '<p class =Pri_imc_5 > Obesidad extrema - IMC  '  +  formula.toFixed(1) + '</p> ';

    }    
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit",IMC)



