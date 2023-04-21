import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('Pruebas en el archivo 11-async-await.js', ()=> {

    test('getImagen debe de retornar una URL de la imagen', async ()=> {

        const url = await getImagen();

        expect(typeof url).toBe('string');

    })

    test('getImagen debe de retornar un error si no hay API KEY', async ()=> {

        const rsp = await getImagen();

        expect(rsp).toBe('No se encontro la imagen');

    })


})