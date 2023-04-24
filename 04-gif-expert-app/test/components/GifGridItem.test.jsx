import {render} from "@testing-library/react";
import {GifGridItem} from "../../src/components/index.js";

describe('Pruebas en el componente <GifGridItem />',()=> {

    const title = 'Google';
    const url = 'www.google.com';

    test('debe hacer match con el snapshot', ()=> {

        const {container} = render(<GifGridItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    })
})