import {render} from "@testing-library/react";
import FirstApp from "../src/FirstApp.jsx";

describe('Pruebas en el archivo <FirstApp />', ()=> {

    test('debe hacer match con el snapshot', ()=> {

        const title = 'Hola, soy Goku';

        render(<FirstApp title={title} />)

    })
})