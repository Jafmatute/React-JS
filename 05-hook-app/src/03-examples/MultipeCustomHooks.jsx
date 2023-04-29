import useFetch from "../hooks/useFecth.js";

const MultipeCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch(' https://api.breakingbadquotes.xyz/v1/quotes/1');

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


        </>
    )
}

export default MultipeCustomHooks;