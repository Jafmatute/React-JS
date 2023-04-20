import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe("Pruebas en el archivo 02-template-string.js", ()=> {

    test('getSalado debe retornar el nombre "Hola Josue"', ()=> {

        const name = "Josue";

        const message = getSaludo(name);

        expect(message).toBe("Hola Josue")

    })
})