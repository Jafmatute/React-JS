import {useState} from "react";
import AddCategory from "./components/AddCategory.jsx";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);

    const onAddCategory = (category) => {

        if(categories.includes(category)) return;

        setCategories([...categories,category]);
    }

    return(
        <>
            <h1>GifExpertApp </h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory ={onAddCategory}
            />

            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )


};

export default GifExpertApp;