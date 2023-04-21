import {getImagen} from "../../src/base-pruebas/11-async-await.js";

describe('Pruebas en el archivo 11-async-await.js', ()=> {

    test('getImagen debe de retornar una URL de la imagen', async ()=> {

        const url = await getImagen();

        expect(typeof url).toBe('string');

    })
})