import useForm from "../hooks/useForm.js";

const FormWithCustomHook = () => {

    const {username, email, password, onInputChange} = useForm({
        username:'',
            email:'',
            password:''
    });

    return (
        <>
           <h1>Formulario con custom hooks</h1>
            <hr />
            <input type='text' value={username} onChange={onInputChange} className='form-control' placeholder='Username' name='username' />
            <input type='email' value={email} onChange={onInputChange} className='form-control mt-2' placeholder='example@gmail.com' name='email' />
            <input type='password' value={password} onChange={onInputChange} className='form-control mt-2' placeholder='contraseña' name='password' />
        </>
    );
};

export default FormWithCustomHook;
