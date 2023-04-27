import {fireEvent, render, screen} from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp.jsx";

describe('Pruebas en el componente <GifExpertApp />', ()=> {

    test('debe mostrar el valor nuevo que se ingreso al input', ()=> {

        const inputValue= 'Goku';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputValue}});

        expect(input.value).toBe("Goku");

    });

    test('debe retornar el mismo arreglo de elementos si se envía un valor ya existente', ()=> {

        const inputValue= 'One Punch';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputValue}});

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(screen.getByText(inputValue).innerHTML).toBe(inputValue);

    });


})