import useFetch from "../hooks/useFecth.js";

const MultipeCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch(' https://api.breakingbadquotes.xyz/v1/quotes/1');

    console.log(data, isLoading, hasError)
    return (
        <>
        <h1>BreakingBad Quotes</h1>
            <hr />
        </>
    )
}

export default MultipeCustomHooks;