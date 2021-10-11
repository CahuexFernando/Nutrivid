var btn_seccion1 = document.querySelector("#From_1");
var cajaresultado = document.querySelector("#Cuadro_resultado");
/*Botones */


var seccion1 = document.querySelector("#siguiente_resultado");
function caja(){

    btn_seccion1.classList.add("activar");
  
}
caja();

    seccion1.addEventListener("click", function(elEvento){
        elEvento.preventDefault();
        btn_seccion1.classList.remove("activar");
        cajaresultado.classList.add("activar");
})

function TestCovid(e){
    e.preventDefault();

    
    var contador = 0;
    var porcentaje = 25;


    if(document.getElementById('cbox1').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox2').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox3').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('cbox4').checked){
        contador=contador+0;      
    }
    var resultado = document.querySelector("#resultado"); 
    
    var Bajo = 23.08;
    var Mediano = 69.23;
    var Alto= 101;

    if(contador < Bajo){
        resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
        }else{
            if(contador < Mediano){
                resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
            }else{
                if(contador < Alto){
                    resultado.innerHTML = '<p class =Pri_imc > Tienes un  '  +  contador.toFixed(2)+"%" + ' de probabilidades de tener Covid-19</p> '; 
                }      
            }
        }
}
var boton = document.querySelector("#siguiente_resultado");
boton.addEventListener("click", TestCovid);