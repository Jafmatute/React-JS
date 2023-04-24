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

        const onNewCategory = jest.fn();

        const inputValue = 'saitama';

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })

    test('no debe de llamar el onNewCategory si el input está vació', ()=> {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:''}})
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})