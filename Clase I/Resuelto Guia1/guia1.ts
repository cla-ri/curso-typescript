/* 
//1
for(let i=1; i<=1000; i++){
    console.log(i); 
}
//2
for(let i=2; i<=1000; i+2){

    console.log(i);
} */
//3
/* let fibn:number  = 1;
let fibn_1:number = 1; 
let fibn_2:number  = 0;

for(let i=0; i<=100; i++){
    switch(i){
        case 0: fibn = 0;
        break;
        case 1: fibn = 1;
        break;
        default: 
        fibn_2 = fibn_1;
        fibn_1 = fibn;
        fibn = fibn_1 + fibn_2;
    }
   console.log('fib '+ i +': ' + fibn);
} */

//4

/* let jugadores = ['Pedro','Juan','Martin','Pedro', 'Ignacio', 'Matias', 'Roberto', 'Julian','Esteban', 'Pedro', 'Alejandro', 'Franco','Francisco', 'Daniel', 'Pedro', 'Manuel', 'Pedro', 'Marco', 'Javier', 'Miguel'];

for(let i=0; i<jugadores.length;i++ ){
    console.log(jugadores[i]);

}
 */
//5
/* let jugadores = ['Pedro','Juan','Martin','Pedro', 'Ignacio', 'Matias', 'Roberto', 'Julian','Esteban', 'Pedro', 'Alejandro', 'Franco','Francisco', 'Daniel', 'Pedro', 'Manuel', 'Pedro', 'Marco', 'Javier', 'Miguel'];
for(let i=0; i<jugadores.length;i++ ){
    if(jugadores[i]==='Pedro'){
        console.log(i);
        }
} */

//6 
/* function mayorQueCeroMenorQueDiez(numero:number): boolean{
    if(numero>0 && numero<10){
        return true;
    }
    return false;
}

console.log(mayorQueCeroMenorQueDiez(0));
console.log(mayorQueCeroMenorQueDiez(10));
console.log(mayorQueCeroMenorQueDiez(7));
console.log(mayorQueCeroMenorQueDiez(198));
 */
//7 
/* let numeros:number[] = [15, 16, 3, 4, 8, 10, 12, 27];

function sumaArreglo(numbers:number[]):number{
    let result: number = 0;
    for(let i=0; i<numbers.length; i++){
        result = result + numbers[i];
    }

    return result;
}

console.log(sumaArreglo(numeros)); */

//8 
let numeros:number[] = [15, 16, 3, 4, 8, 10, 12, 27];

function productoArreglo(numbers:number[]):number{
    let result: number = 1;
    for(let i=0; i<numbers.length; i++){
        result = result * numbers[i];
    }

    return result;
}

console.log(productoArreglo(numeros));

//9
function dividir(dividendo:number, divisor:number):number{
    if (divisor==0) return 0 ;
    return dividendo/divisor;

}

console.log(dividir(10, 2));
console.log(dividir(5, 2));
console.log(dividir(10, 0));
console.log(dividir(0, 0));
console.log(dividir(0, 2));



//10

function entre(numero:number, contaInferior:number, cotaSuperior:number):boolean{
        if (numero >= contaInferior && numero <= cotaSuperior){
            return true; 
        }
    return false;
}

console.log(entre(100, 1, 101));
console.log(entre(98, 99, 101));
console.log(entre(100, 1, 100));
console.log(entre(400, 599, 101));
