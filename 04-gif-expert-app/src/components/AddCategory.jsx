import {useState} from "react";

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('One punch');


    const onInputChange = ({target:{value}}) => setInputValue(value);

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <=1) return;

        setCategories(category => [...category, inputValue]);

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
