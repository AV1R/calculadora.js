console.log("%cDeveloped by Avir", "color:white; background:black; padding:10px 200px; border:3px solid blue;")


let n0 = document.getElementById('n0');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let punto = document.getElementById('punto');
let div = document.getElementById('div');
let suma = document.getElementById('sum');
let rest = document.getElementById('rest');
let mult = document.getElementById('mult');
let porc = document.getElementById('porc');
let res = document.getElementById('res');
let digitos = document.getElementById('digitos');
let ac = document.getElementById('ac');

//na= numero actual , nao= numero a operar( sumar , multiplicar,etc), o=operador

cifraActual = " ";
cifra = 0;
resultado = 0;
opAcual = null;

function operaciones(op, cifraOperar) {
    //console.log("fun operaciones", op, cifraOperar);
    if (op == null) {
        op = opAcual;
    }
    //console.log("Operador= ", op);
    switch (op) {
        case '+':
            //console.log("Entra a Operador=  +", );
            cifra = parseFloat(cifra) + parseFloat(cifraOperar);
            resultado = cifra;
            break;
        case '-':
            //console.log("Entra a Operador= -", op);
            cifra = ((parseFloat(cifraOperar) - parseFloat(cifra)));
            //Convertir a positivo
            cifra = ((cifra * cifra) ** 0.5);
            resultado = cifra;
            break;
        case '/':
            //console.log("Entra a Operador=  /", );
            let div1 = parseFloat(cifra);
            let div2 = parseFloat(cifraOperar);
            //console.log(div1);
            //console.log(div2);
            cifra = (div1 / div2);
            //console.log("Div: ", cifra);
            resultado = cifra;
            break;
        case '*':
            //console.log("Entra a Operador=  *", );
            cifra = parseFloat(cifra) * parseFloat(cifraOperar);
            resultado = cifra;
            break;
        case '%':
            let por1 = parseFloat(cifra);
            let por2 = parseFloat(cifraOperar);
            //console.log(por1);
            //console.log(por2);
            //console.log("Entra a Operador=  %", por1, por2);
            cifra = (parseFloat(por2) / 100) * parseFloat(por1);
            resultado = cifra;
            break;
        default:
            cifra = "Error";

    }



}


n0.addEventListener("click", () => {
    //console.log("Soy numero 0");
    cifraActual += n0.value;
    digitos.innerHTML = cifraActual;
})

n1.addEventListener("click", () => {
    //console.log("Soy numero 1");
    cifraActual += n1.value;
    digitos.innerHTML = cifraActual;

})

n2.addEventListener("click", () => {
    //console.log("Soy numero 2");
    cifraActual += n2.value;
    digitos.innerHTML = cifraActual;

})

n3.addEventListener("click", () => {
    //console.log("Soy numero 3");
    cifraActual += n3.value;
    digitos.innerHTML = cifraActual;

})
n4.addEventListener("click", () => {
    //console.log("Soy numero 4");
    cifraActual += n4.value;
    digitos.innerHTML = cifraActual;

})

n5.addEventListener("click", () => {
    //console.log("Soy numero 5");
    cifraActual += n5.value;
    digitos.innerHTML = cifraActual;

})
n6.addEventListener("click", () => {
    //console.log("Soy numero 6");
    cifraActual += n6.value;
    digitos.innerHTML = cifraActual;

})

n7.addEventListener("click", () => {
    //console.log("Soy numero 7");
    cifraActual += n7.value;
    digitos.innerHTML = cifraActual;

})
n8.addEventListener("click", () => {
    //console.log("Soy numero 8");
    cifraActual += n8.value;
    digitos.innerHTML = cifraActual;

})

n9.addEventListener("click", () => {
    //console.log("Soy numero 9");
    cifraActual += n9.value;
    digitos.innerHTML = cifraActual;

})

punto.addEventListener("click", () => {
    //console.log("Soy punto");
    cifraActual += punto.value;
    digitos.innerHTML = cifraActual;

})

div.addEventListener("click", () => {
    //console.log("Soy division");
    cifra = digitos.innerHTML;
    opAcual = '/';
    cifraActual = " ";

})

suma.addEventListener("click", () => {
    //console.log("Soy suma");
    operaciones('+', digitos.innerHTML);
    opAcual = '+';
    cifraActual = " ";

})

rest.addEventListener("click", () => {
    //console.log("Soy resta");
    operaciones('-', digitos.innerHTML);
    opAcual = '-';
    cifraActual = " ";

})

mult.addEventListener("click", () => {
    //console.log("Soy multiplicación");
    cifra = digitos.innerHTML;
    opAcual = '*';
    cifraActual = " ";

})

porc.addEventListener("click", () => {
    //console.log("Soy porcentaje");
    cifra = digitos.innerHTML;
    opAcual = '%';
    cifraActual = " ";

})

res.addEventListener("click", () => {
    //console.log("Soy resultado");
    operaciones(null, digitos.innerHTML);
    digitos.innerHTML = resultado;
    cifra = 0;
    cifraActual = " ";
})

ac.addEventListener("click", () => {
    //console.log("Soy ac");
    digitos.innerHTML = "0";
    cifra = 0;
    cifraActual = " ";
})