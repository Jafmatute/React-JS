import {useState} from "react";
import AddCategory from "./components/AddCategory.jsx";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);

    const onAddCategory = () => {
        setCategories([...categories, 'Dragon ball']);
    }
    return(
        <>
            <h1>GifExpertApp </h1>

            <AddCategory />

            <button onClick={onAddCategory}> añadir categoria </button>
            <ol>
                {categories.map((category,index) => {
                    return <li key={index}>{category}</li>
                })}
            </ol>
        </>
    )


};

export default GifExpertApp;