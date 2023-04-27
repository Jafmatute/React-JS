import React from 'react';
import useCounter from "../hooks/useCounter.js";

const CounterWithCustomHook = () => {

    const {counter} = useCounter();


    return (
        <>
        <h1>Counter with Hook: {counter} </h1>
            <hr />

            <button className="btn btn-success">+1</button>
            <button className="btn btn-danger">Reset</button>
            <button className="btn btn-info">-1</button>
        </>
    )
}

export default CounterWithCustomHook;