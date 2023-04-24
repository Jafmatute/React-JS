import {getGifs} from '../helpers/getGifs.js';
import {useEffect, useState} from "react";


const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=> {

        getGifs(category).then(img=> setImages(img));

    },[])

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {images.map(({id, title})=>
                    (
                        <li key={id}> {title}</li>
                    )
                )}
            </ol>
        </>
    );
};

export default GifGrid;
