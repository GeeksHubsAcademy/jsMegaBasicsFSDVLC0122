/*
//funcion tolowercase encargada de forzar a minúsculas cualquier texto de tipo string
let dia = prompt("Dime un día de la semana").toLowerCase();

//condicional que evalua varias posibilidades y entra SÓLO en la que coincide. 
switch (dia) {

    case "lunes" :
        console.log("Vas a comer pasta");
    break;

    case "martes" :
        console.log("Vas a comer tortilla");
    break;

    case "miercoles" :
        console.log("Vas a comer paella");
    break;

    case "jueves" :
        console.log("Vas a comer arroz al horno");
    break;

    case "viernes" :
        console.log("Vas a comer all i pebre");
    break;

    case "sabado" :
        console.log("Vas a comer pizza");
    break;

    case "domingo" :
        console.log("Vas al hospital");
    break;

    default:
        console.log("LA SEMANA TIENE 7 DIAS, TONTO");
    break;

}
*/

/////////////////////////////////////////

let edad = 18;

//let verPeliculaTerror;

/*
// Opción 1
if (edad >= 18){
    verPeliculaTerror = 'SI';
}else {
    verPeliculaTerror = 'NO';
}*/


// Opción 2
//let verPeliculaTerror = (edad >= 18) ? 'SI' : 'NO';
/*
let contador = 0;

while(contador >= 1){
    console.log(contador);
    contador--;
};

do {
    console.log(contador);
    contador--;
}while(contador >=1);


*/
/*
for(let i = 1; i <= 10; i++){
    //Lo que ocurra aquí dentro es lo que se
    //repite.
    console.log("soy ", i);
};


const personaje = "Sonic";
let verdad = false;
let respuesta;

while(!verdad){

    respuesta = prompt("Quien es mejor, Sonic o Mario?");

    if(respuesta == personaje){
        verdad = true;
    };
};
*/
/*
for(let contador = 1; contador < 100; contador++){
    console.log(contador);
};
*/

/*
****
****
****
****
*/
let fila = "";

for(let x = 0; x < 4; x++){

    for(let i = 0; i < 4; i++){
        fila = fila + "*";
    };

    console.log(fila + x);
    fila = "";

};

    