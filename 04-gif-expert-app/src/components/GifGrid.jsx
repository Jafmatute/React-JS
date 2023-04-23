import {getGifs} from '../helpers/getGifs.js';


const GifGrid = ({category}) => {

    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
        </>
    );
};

export default GifGrid;
