import {useEffect} from "react";

const Message = () => {

    useEffect(() => {
        console.log('Message Mounted')
        return () => {
            console.log('Message unMounted')
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
};

export default Message;
