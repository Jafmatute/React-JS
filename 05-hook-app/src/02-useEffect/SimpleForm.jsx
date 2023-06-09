import {useEffect, useState} from "react";
import Message from "./Message.jsx";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'contoso',
        email: 'contoso.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(() => {
        //console.log('useEffect called');
    }, []);

    useEffect(() => {
        //console.log('formState called');
    }, [formState]);

    useEffect(() => {
        //console.log('email called');
    }, [email]);

    return (
        <>
           <h1>Simple Form</h1>
            <hr />

            <input type='text' value={username} onChange={onInputChange} className='form-control' placeholder='Username' name='username' />
            <input type='email' value={email} onChange={onInputChange} className='form-control mt-2' placeholder='example@gmail.com' name='email' />

            {(username === 'contoso1') && <Message />}
        </>
    );
};

export default SimpleForm;
