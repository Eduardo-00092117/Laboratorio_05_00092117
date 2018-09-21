
function circunferencia(radio){
    if(radio < 0){
        console.log('No se puede ingresar radios negativos');
        return -1;
    } else{
        console.log('Tu area es: ');
        return Math.PI*(radio**2);
    }
}

console.log(circunferencia(prompt('Ingrese el radio de la circunferencia')));