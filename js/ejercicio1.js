
function palindromo(palabra){
    var bandera = true;
    var cont = palabra.length - 1;
    for(var x = 0; x < palabra.length; x++){
        if(palabra[x] != palabra[cont]){
            bandera = false;
        }
        --cont;
    }

    if(bandera == true){
        console.log('Es palindromo');
    } else{
        console.log('No es palindromo');
    }
}

var palabra = prompt('Escribe una palabra palindroma');
palindromo(palabra);