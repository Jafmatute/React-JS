import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";

describe('Pruebas en el componente <GifGrid />', ()=> {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', ()=> {

        render(<GifGrid category={category} />);

        expect(screen.getByText('cargando....'));
        expect(screen.getByText(category));

    })

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs', ()=> {

    })

})