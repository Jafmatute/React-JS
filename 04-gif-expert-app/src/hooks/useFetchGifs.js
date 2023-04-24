import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {

        getGifs(category).then(img=> {
            setImages(img)
            setIsLoading(false);
        });

    },[])


    return {
        images,
        isLoading
    }
}

export default UseFetchGifs;