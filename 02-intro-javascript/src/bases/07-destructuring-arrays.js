/** @format */

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = personajes;

console.log(trunks);

const retornaArray = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArray();

console.log(letras, numeros);

/** Tarea
 * el primer valor se llamara nombre
 * el segundo se llamara setNombre
 */

const usestate = (valor) => {
  return [valor, () => console.log("Hola Mundo")];
};

const [nombre, setNombre] = usestate("Goku");
console.log(nombre);
setNombre();
