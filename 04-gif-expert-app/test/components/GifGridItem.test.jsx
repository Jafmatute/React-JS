import {render, screen} from "@testing-library/react";
import {GifGridItem} from "../../src/components/index.js";

describe('Pruebas en el componente <GifGridItem />',()=> {

    const title = 'Google';
    const url = 'http://localhost/www.google.com';

    test('debe hacer match con el snapshot', ()=> {

        const {container} = render(<GifGridItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', ()=> {

        render(<GifGridItem title={title} url={url} />);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);

    })

    test('debe de mostrar el titulo en el componente', ()=> {

        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })


})