function absoluto(numero){
    if(numero < 0){
        return numero*-1;
    } else if(numero >= 0){
        return numero
    }
}

console.log('El absoluto es ' + absoluto(prompt('Escriba un numero')));