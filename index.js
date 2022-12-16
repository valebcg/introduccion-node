const { register, read } = require("./operaciones");

const arguments = process.argv.slice(2);

const operation = arguments[0];
const name = arguments[1];
const age = arguments[2];
const type = arguments[3];
const color = arguments[4];
const disease = arguments[5];

if (operation === "register") {
  register(name, age, type, color, disease);
}

if (operation === "read") {
  read();
}

if (operation === "register") {
  if (
    name === undefined ||
    age === undefined ||
    type === undefined ||
    color === undefined ||
    disease === undefined
  ) {
    console.log("Falta rellenar campos");
    return;
  } else if (isNaN(age)) {
    console.log("La edad debe ser numérico");
    return;
  }
  register(name, age, type, color, disease);
} else if (operation === "read") {
  read();
} else {
  console.log("El comando ingresado es inválido");
}
