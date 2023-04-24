import {getGifs} from '../helpers/getGifs.js';
import {useEffect, useState} from "react";
import GifGridItem from "./GifGridItem.jsx";


const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=> {

        getGifs(category).then(img=> setImages(img));

    },[])

    console.log('test', images);
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image) => (<GifGridItem key={image.id} {...image} />)
                )}
            </div>
        </>
    );
};

export default GifGrid;
