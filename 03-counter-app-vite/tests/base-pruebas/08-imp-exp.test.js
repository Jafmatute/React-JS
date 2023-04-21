import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";
import heros from '../../src/data/heroes.js';

describe('Pruebas en el archivo 08-imp-exp.js',()=> {

    test('getHeroeById debe de retornar un heroe por su ID', ()=> {

        const id = 1;

        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retornar undefined sino existe el ID', ()=> {

        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', ()=> {

        const filtro = 'DC';

        const heroes = getHeroesByOwner(filtro);

        expect(heroes.length).toBe(3);

        expect(heroes).toEqual(heros.filter(f => f.owner === filtro))


    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', ()=> {

        const filtro = 'Marvel';

        const heroes = getHeroesByOwner(filtro);

        expect(heroes.length).toBe(2);

        expect(heroes).toEqual(heros.filter(f => f.owner === filtro))

    })
})