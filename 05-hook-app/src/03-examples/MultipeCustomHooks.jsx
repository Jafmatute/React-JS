import useFetch from "../hooks/useFecth.js";
import useCounter from "../hooks/useCounter.js";

const MultipeCustomHooks = () => {

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
                        <div className='alert alert-info'>
                            Loading.....
                        </div>
                    ):
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{quote}</p>
                            <footer className='blockquote-footer mt-1'>{author}</footer>
                        </blockquote>
                    )
            }

            <button disabled={isLoading} className='btn btn-info' onClick={()=> increment(1)}>
                Next quote
            </button>


        </>
    )
}

export default MultipeCustomHooks;