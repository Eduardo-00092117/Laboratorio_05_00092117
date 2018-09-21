dato = prompt('Ingrese un numero, para la serie fibonacci');
fibonacci(dato);

function fibonacci(n) {
    let actual;
    let posicionN = 1;
    let posicion2N = 0;
    let cadena;
    console.log(0);
    console.log(1);
    
    for(var x = 0; x < n-2; x++){
        actual = posicionN + posicion2N;
        console.log(actual);
        posicion2N = posicionN;
        posicionN = actual;
    }
}