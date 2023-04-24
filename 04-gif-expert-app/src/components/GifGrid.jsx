import {getGifs} from '../helpers/getGifs.js';
import {useEffect, useState} from "react";
import GifGridItem from "./GifGridItem.jsx";

import useFetchGifs from "../hooks/useFetchGifs.js";


const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs (category);

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
