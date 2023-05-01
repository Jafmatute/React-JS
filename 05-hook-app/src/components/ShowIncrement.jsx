import {memo} from "react";


export const ShowIncrement = memo(
    ({increment, counter}) => {
        console.log('me volvi a generar :(')
        return (
            <button className='btn btn-primary' onClick={()=> increment(counter)}>Incrementar</button>
        );

    }
)