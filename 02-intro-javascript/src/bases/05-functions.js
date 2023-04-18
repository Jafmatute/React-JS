/**
 * Funciones Js
 *  @format */

/** Forma no recomendada #1 */
function saludar1(nombre) {
  return `Bienvenido ${nombre}`;
}

/** Forma #2 */
const saludar2 = function (nombre) {
  return `Bienvenido ${nombre}`;
};

/**Forma #3 */

const saludar3 = (nombre) => {
  return `Bienvenido ${nombre}`;
};

/**Forma corta */
const cortaSaludar = (nombre) => `Hola, ${nombre}`;

const getUser = () => {
  return {
    uid: "aasasax",
    username: "ace01",
  };
};

console.log(saludar3("Ace"));
console.log(getUser());

/** TAREA
 * Transformar a una funcion de flecha
 * Retornar un objecto implicito
 * Test
 
  function getUsuarioActivo(nombre) {
  return {
    uid: 'AFDFDFD',
    username:nombre
}  
}

 */

const getUsuarioActivo = (nombre) => ({
  uid: "AFDFDFD",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Josue");
console.log(usuarioActivo);
