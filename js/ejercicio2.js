function ordenar(){
    var num = [3, 4, 12, 1, 3, 6];
    var key;
    var j;
    for(var x = 1; x < num.length; x++){
        key = num[x];
        j = x-1;
        while (j > -1 && key < num[j]){
            num[j+1]=num[j];
            j = j-1;
        }
        num[j+1] = key;
    }

    return num;
}

console.log(ordenar());