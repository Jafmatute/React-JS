import {useState} from "react";

const UseForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    }

    return {
        ...formState,
    formState, onInputChange
    }
}
export default UseForm;