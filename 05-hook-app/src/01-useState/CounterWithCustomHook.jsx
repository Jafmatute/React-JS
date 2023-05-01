import React from 'react';
import {useCounter} from "../hooks/";

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();


    return (
        <>
        <h1>Counter with Hook: {counter} </h1>
            <hr />

            <button onClick={()=> increment()} className="btn btn-success">+1</button>
            <button onClick={reset} className="btn btn-danger">Reset</button>
            <button onClick={()=>decrement()} className="btn btn-info">-1</button>
        </>
    )
}

export default CounterWithCustomHook;