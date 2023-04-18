/** @format */
import { getHeroById } from "./08-import-export";
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroById(2);
    resolve(hero);

    //error
    // reject("No se encontro el heroe");
  }, 2000);
});

promesa.then((hero) => {
  console.log("then de la promesa", hero);
});

promesa.catch((error) => {
  console.warn(error);
});

//Ejemplo
const getHeroByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ?? reject("No hay resultados disponibles");

      resolve(hero);
    }, 2000);
  });

  return promesa;
};

getHeroByIdAsync(1).then(console.log).catch(console.warn);
