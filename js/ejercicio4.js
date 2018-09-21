function convertir(n){
    if(n < 0){
        console.log('No se puede ingresar negativos!!!!');
    } else{
        var arreglo = [];
        var numero = n;
        var original = numero;
        while(numero != 1){
            arreglo.push(numero%2);
            numero = Math.floor(numero/2);
        }
        arreglo.push(numero);
        arreglo.reverse();
        console.log('El binario de ' + original + ' es ' + arreglo.join(""));
    }
}

convertir(prompt('Ingrese un numero a convertir'));