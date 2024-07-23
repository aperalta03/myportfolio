//Takes a relative PATH. 
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};