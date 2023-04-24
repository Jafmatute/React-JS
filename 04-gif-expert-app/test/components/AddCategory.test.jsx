import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components/index.js";

describe('Pruebas en el componente <AddCategory />', ()=> {

    test('debe de cambiar el valor de la caja de texto',() => {

        render(<AddCategory onNewCategory={()=> {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target:{value:'saitama'}});

        expect(input.value).toBe('saitama');

    })

    test('debe de llamar onNewCategory si el input tiene un valor', ()=> {

        const inputValue = 'saitama';

        render(<AddCategory onNewCategory={()=> {} }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');

    })
})