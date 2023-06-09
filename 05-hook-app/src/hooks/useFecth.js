import {useEffect, useState} from "react";

export const useFetch =(url) => {

    console.log(url)

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null
    });

    const getFech = async () => {

        setState({...state, isLoading: true})

        const rsp = await fetch(url);
        const data = await rsp.json();
        setState({
            data,
            isLoading: false,
            hasError: null,
        })

    }

    useEffect(() => {

        getFech();
    }, [url]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}