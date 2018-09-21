
function bisiesto(annio){
    if(((annio%100) != 0) && ((annio%4)==0) || ((annio%400) == 0)){
        console.log('Es bisiesto');
    } else {
        console.log('No es bisiesto');
    }
}

bisiesto(prompt('Escriba un año'));