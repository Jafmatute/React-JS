export const getGifs = async ({category}) => {

    const API_KEY = `YAdYJxPGMmsk51wppqHMVWOuGMjlxYLz`;
    const ENDPOINT_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;

    const rsp = await fetch(ENDPOINT_URL);
    const { data }  = await rsp.json();

    return data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));
}