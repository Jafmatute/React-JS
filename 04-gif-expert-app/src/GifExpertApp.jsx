import {useState} from "react";
import AddCategory from "./components/AddCategory.jsx";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);

    return(
        <>
            <h1>GifExpertApp </h1>

            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map((category,index) => {
                    return <li key={index}>{category}</li>
                })}
            </ol>
        </>
    )


};

export default GifExpertApp;