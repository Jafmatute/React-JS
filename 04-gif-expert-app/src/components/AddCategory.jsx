import {useState} from "react";

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One punch');


    const onInputChange = ({target:{value}}) => setInputValue(value);

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <=1) return;

        onNewCategory(inputValue.trim())

        setInputValue('');
    }


    return (
        <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder="Buscar gits"
            value={inputValue}
            onChange={onInputChange} />
        </form>
    );
};

export default AddCategory;
