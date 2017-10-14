/*Ejemplo basico de js*/

function sumar(){
    var num1, num2, res;

    num1 = prompt("Dame un numero?");
    num2 = window.prompt("Dame otro numero?");

    num1 = parseInt(num1);
    num2 = parseInt(num2)

    res = num1 + num2;

    //window.alert("La suma es: "+res);
    var titulo = document.getElementById('titulo');
    titulo.style="color:blue;";

    titulo.innerHTML = "La suma es: "+res

}
