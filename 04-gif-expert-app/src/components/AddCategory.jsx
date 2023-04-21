import {useState} from "react";

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One punch');


    const onInputChange = ({target:{value}}) => setInputValue(value);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(inputValue)
    }


    return (
        <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder="Buscar gits"
            onChange={onInputChange} />
        </form>
    );
};

export default AddCategory;
