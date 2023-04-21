import {fireEvent, render, screen} from "@testing-library/react";
import CounterApp from "../src/CounterApp.jsx";

describe('Pruebas en el componente <CounterApp />', ()=> {

    const initialValue = 100;

    test('debe hacer match con el snapshot', ()=> {

        const {container} =render(<CounterApp value={initialValue} />)

        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el valor inicial de 100', ()=> {

        render(<CounterApp value={initialValue} />)
        expect(screen.getByText(initialValue)).toBeTruthy();

        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain("100");

    })

    test('debe de incrementar con el botón +1', ()=> {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('101')).toBeTruthy();

    })

    test('debe de decrementar con el botón -1', ()=> {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('99')).toBeTruthy();

    })

    test('debe de funcionar el botón de reset', ()=> {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        //fireEvent.click(screen.getByText('reset'))
        fireEvent.click(screen.getByRole('button', {name:'btnReset'}))

        expect(screen.getByText(initialValue)).toBeTruthy();
    })
})