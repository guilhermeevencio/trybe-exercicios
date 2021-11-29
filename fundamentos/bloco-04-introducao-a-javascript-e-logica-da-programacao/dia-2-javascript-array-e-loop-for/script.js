

//ex001

//for (index = 0 ; index < numbers.length; index +=1) {
//    console.log(numbers[index])
//}

//ex002

//let result = 0;
//for (index = 0; index < numbers.length; index +=1) {
//    result += numbers[index]
//}
//console.log(result);
 
//ex003 e 004
//let result = 0;
//
//for (index = 0; index < numbers.length; index +=1) {
//result += numbers[index]
//}
//
//var valorFinal = result / numbers.length
//
//console.log(valorFinal)
//if (valorFinal > 20) {
//    console.log(`Valor maior que 20`)
//} else {
//    console.log(`Valor menor ou igual a 20`);
//}

//ex005
//let higherNumber = numbers[0];
//for (index = 1; index < numbers.length; index +=1) {
//    if(numbers[index] > higherNumber) {
//        higherNumber = numbers[index]
//    }
//} console.log(higherNumber)

//ex006
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !==0) {
        impares =+ 1;
    }    
} 
if (impares === 0) {
    console.log(`Nenhum valor foi encontrado`)
} else {
    console.log(impares);
}