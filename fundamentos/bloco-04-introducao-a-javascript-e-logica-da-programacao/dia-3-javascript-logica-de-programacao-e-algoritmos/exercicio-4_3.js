//exercicio1

/*let n = 5;
let aux = "";

for (index = 0; index < n; index += 1) {
        aux = `*`.repeat(n);
        console.log(aux);
}*/

//exercicio2

/*let n = 5;
let aux = "";

for (index = 0; index < n; index += 1) {
        aux += `*`;
        console.log(aux);
}*/

//exercicio3

/*let n = 5;
let aux = "";
let space = "";

for (index = 0; index < n; index += 1) {
        space = ` `.repeat(n - index);
        aux += `*`;
        console.log(space + aux);
}*/

//exercicio4

/*let n = 6;
let aux = "";
let space = "";
let nova = ""

for (index = 0; index < n; index += 1) {
    nova = n - index
    if (index == 0) {
        aux += `*`
        space = ` `.repeat(Math.floor((n - index) / 2 ))
        console.log(space + aux)
    } else if (nova % 2 !== 0) {
        aux += `**`
        space = ` `.repeat(Math.floor((n - index) / 2 ))
        console.log(space + aux)
    }

}*/
