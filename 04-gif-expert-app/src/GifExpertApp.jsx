import {useState} from "react";
import AddCategory from "./components/AddCategory.jsx";
import GifGrid from "./components/GifGrid.jsx";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);

    const onAddCategory = (category) => {

        if(categories.includes(category)) return;

        setCategories([category, ...categories]);
    }

    return(
        <>
            <h1>GifExpertApp </h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory ={onAddCategory}
            />

            {categories.map((category) => <GifGrid key={category} category={category} />)}

        </>
    )


};

export default GifExpertApp;