function total(){
const moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let cantidad = document.getElementById('cantidad').value;
let divisa1 = document.getElementById('divisa1').value;
let divisa2 = document.getElementById('divisa2').value;
let totalid = document.getElementById('total');
let resultado;

// Conversion USD

let usd_gbp = 0.74;
let usd_mxn = 20.58;
let usd_eur = 0.88;
let usd_cop = 4037;

if (divisa1 === "Dolar" && divisa2 === "Libra Esterlina") {
    resultado = cantidad * usd_gbp;
}
else if (divisa1 === "Dolar" && divisa2 === "Peso Mexicano") {
    resultado = cantidad * usd_mxn;
}
else if (divisa1 === "Dolar" && divisa2 === "Euro") {
    resultado = cantidad * usd_eur;
}
else if (divisa1 === "Dolar" && divisa2 === "Peso Colombiano") {
    resultado = cantidad * usd_cop;
};

// Conversion GBP

let gbp_usd = 1.35;
let gbp_mxn = 27.64;
let gbp_eur = 1.19;
let gbp_cop = 1146;

if (divisa1 === "Libra Esterlina" && divisa2 === "Dolar") {
    resultado = cantidad * gbp_usd;
}
else if (divisa1 === "Libra Esterlina" && divisa2 === "Peso Mexicano") {
    resultado = cantidad * gbp_mxn;
}
else if (divisa1 === "Libra Esterlina" && divisa2 === "Euro") {
    resultado = cantidad * gbp_eur;
}
else if (divisa1 === "Libra Esterlina" && divisa2 === "Peso Colombiano") {
    resultado = cantidad * gbp_cop;
};

// Conversion MXN

let mxn_usd = 0.049;
let mxn_gbp = 20.58;
let mxn_eur = 0.043;
let mxn_cop = 196.28;

if (divisa1 === "Peso Mexicano" && divisa2 === "Dolar") {
    resultado = cantidad * mxn_usd;
}
else if (divisa1 === "Peso Mexicano" && divisa2 === "Libra Esterlina") {
    resultado = cantidad * mxn_gbp;
}
else if (divisa1 === "Peso Mexicano" && divisa2 === "Euro") {
    resultado = cantidad * mxn_eur;
}
else if (divisa1 === "Peso Mexicano" && divisa2 === "Peso Colombiano") {
    resultado = cantidad * mxn_cop;
};

// Conversion EUR

let eur_usd = 1.13;
let eur_gbp = 0.84;
let eur_mxn = 23.34;
let eur_cop = 4581;

if (divisa1 === "Euro" && divisa2 === "Dolar") {
    resultado = cantidad * eur_usd;
}
else if (divisa1 === "Euro" && divisa2 === "Libra Esterlina") {
    resultado = cantidad * eur_gbp;
}
else if (divisa1 === "Euro" && divisa2 === "Peso Mexicano") {
    resultado = cantidad * eur_mxn;
}
else if (divisa1 === "Euro" && divisa2 === "Peso Colombiano") {
    resultado = cantidad * eur_cop;
};

// Conversion COP

let cop_usd = 0.00025;
let cop_gbp = 0.00019;
let cop_eur = 0.00022;
let cop_mxn = 0.0052;

if (divisa1 === "Peso Colombiano" && divisa2 === "Dolar") {
    resultado = cantidad * cop_usd;
}
else if (divisa1 === "Peso Colombiano" && divisa2 === "Libra Esterlina") {
    resultado = cantidad * cop_gbp;
}
else if (divisa1 === "Peso Colombiano" && divisa2 === "Euro") {
    resultado = cantidad * cop_eur;
}
else if (divisa1 === "Peso Colombiano" && divisa2 === "Peso Mexicano") {
    resultado = cantidad * cop_mxn;
};

totalid.innerHTML =`<h1>La cantidad es de: ${resultado} ${divisa2}</h1>`;

}

