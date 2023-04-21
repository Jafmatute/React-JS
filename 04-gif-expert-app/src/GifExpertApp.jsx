import {useState} from "react";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch', 'Demon Slayer']);

    return(
        <>
            <h1>GifExpertApp </h1>

            <ol>
                {categories.map((category,index) => {
                    return <li key={index}>{category}</li>
                })}
            </ol>
        </>
    )


};

export default GifExpertApp;