import {render} from "@testing-library/react";
import FirstApp from "../src/FirstApp.jsx";

describe('Pruebas en el archivo <FirstApp />', ()=> {

    test('debe hacer match con el snapshot', ()=> {

        const title = 'Hola, soy Goku';

       const {container} = render(<FirstApp title={title} />)

        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el título en un h1', ()=> {

        const title = 'Hola, soy Goku';

        const {container, getByText} = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toBe(title);

    })
})