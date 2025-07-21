alert('hello world');

let integer = 10;
let float = 1.5;
let string = "Hello world";
let booleen = true;

// console.log(typeof integer);
// console.log(typeof float);
// console.log(typeof string);
// console.log(typeof booleen);

let txt = "nous sommes l'avenir du dev";

console.log(txt);

let txtMaj = txt.toUpperCase();

console.log(txtMaj);

// avec minuscule

let txtMin = txtMaj.toLowerCase();

console.log(txtMin);

// Enlever les espaces.

//let txtWhitespace = txt.split(" ").join("");
let txtWhitespace = txt.replaceAll(" ", "");

console.log(txtWhitespace);

// Compter le nombre de caractère d'une string.

let txtLength = txtWhitespace.length;

console.log(txtLength)

// Vérifier si le mot "nous" est contenu dans la string.

let word = "nous"

let txtStr = txt.includes(word);

console.log(txtStr);


//Fonction qui génère un chiffre aléatoirement entre 1 et 10.

//Formule : Math.floor(Math.random() * (max - min + 1)) + min;

//let int = Math.floor(Math.random() * 10) + 1;

let nombre = Math.round(Math.random() * 9) + 1;

console.log(`Nombre aléatoire arrondi entre 1 et 10 : ${nombre}`);

