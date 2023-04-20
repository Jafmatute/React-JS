
describe("Pruebas en el archivo demo.js", ()=> {

    test("esta prueba no debe de fallar", ()=> {

        // 1 . inicialización
        const message = 'Hola Mundo';

        // 2. estímulo
        const  message2 = message.trim();


        // 3. observar el comportamiento... esperado
        expect (message).toBe(message2);
    })
})