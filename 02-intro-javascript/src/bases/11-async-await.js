/** @format */

// const getImagen = () => new Promise((resolve) => resolve("https://ddfdf.com"));
// getImagen().then(console.log);

const getImagen = async () => {
  try {
    const api_key = "YAdYJxPGMmsk51wppqHMVWOuGMjlxYLz";
    const rsp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );

    if (rsp.ok) {
      const { data } = await rsp.json();

      const { url } = data.images.original;

      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    }
  } catch (error) {
    //Manejo del error
  }
};

getImagen();
