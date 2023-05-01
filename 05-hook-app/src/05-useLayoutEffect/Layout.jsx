import {LoadingQuote, Quote} from "../components/";
import {useCounter, useFetch} from "../hooks/index.js";

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`

    const {data, isLoading, hasError} = useFetch(url);

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ?
                    (
                        <LoadingQuote />
                    ):
                    (
                        <Quote quote={quote} author={author} />
                    )
            }

            <button disabled={isLoading} className='btn btn-info' onClick={()=> increment(1)}>
                Next quote
            </button>


        </>
    )
}