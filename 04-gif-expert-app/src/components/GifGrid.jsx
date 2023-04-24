import {GifGridItem}from "./GifGridItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>cargando....</h2>)
            }
            <div className="card-grid">
                {images.map((image) => (<GifGridItem key={image.id} {...image} />)
                )}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}


