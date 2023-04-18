/** @format */

import heroes, { owners } from "../data/hero";
//Find
export const getHeroById = (id) => heroes.find((hero) => hero.id === id);
//Filter
export const getHeroByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

// console.log(getHeroById(1));
// console.log(getHeroByOwner("DC"));
