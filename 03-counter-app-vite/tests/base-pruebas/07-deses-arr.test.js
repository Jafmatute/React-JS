import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr.js";

describe('Pruebas en el archivo 09-deses-arr.js', ()=> {

    test('debe de retornar un string o un número',()=> {

        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String))


    })
})