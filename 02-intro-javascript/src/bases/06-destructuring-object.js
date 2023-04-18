/**
 * Desestructuraciòn
 * Asiganciòn Desestructurante
 *  @format */

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
  rango: "soldado",
};

const { nombre, clave } = persona;

//Renombrar
// const { nombre: nombre2, clave } = persona;

const retornarPersona = ({ edad, clave, rango = "capitan" }) => {
  //   console.log(edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.00944545,
      lng: -12.08398498,
    },
  };
};

console.log(`${nombre} con clave: ${clave}`);

const avenger = retornarPersona(persona);
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);
