/** @format */

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  age: 41,
  direccion: {
    zip: "Ny",
    city: "New York",
    lat: 2356576677,
    long: 120949034,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log({ persona });
console.log({ persona2 });
