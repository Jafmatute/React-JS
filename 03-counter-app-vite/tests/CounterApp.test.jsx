import {render, screen} from "@testing-library/react";
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
})