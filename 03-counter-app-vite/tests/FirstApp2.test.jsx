import {render, screen} from "@testing-library/react";
import FirstApp from "../src/FirstApp.jsx";

describe('Pruebas en el archivo <FirstApp />', ()=> {

    const title = "Hola, Soy Goku";
    const subTtile = '<p> Soy un subtitulo</p>';

    test('debe de hacer mach con el snapshot', ()=> {

        const {container} = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola, Soy Goku"', ()=> {

        render(<FirstApp title={title} />)
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('debe de mostrar el titulo en un h1', ()=> {

        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);

    })

    test('debe de mostrar el subtitulo enviado por los props', ()=> {


        render(<FirstApp title={title} subTitle={subTtile} />)
        expect(screen.getByText(subTtile)).toBeTruthy();

    })


})