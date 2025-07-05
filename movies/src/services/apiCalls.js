import axios from "axios";

export const getMovies = async () => {
  // const apiKey = import.meta.env.VITE_APP_API_KEY;
  const FEATURED_API = "https://ghibliapi.vercel.app/films";
  try {
    const { data } = await axios.get(FEATURED_API);
    return data;
  } catch (error) {
    return error;
  }
};

export const getMoviesDetail = async (id) => {
  try {
    // const apiKey = import.meta.env.VITE_APP_API_KEY;
    const DETAIL_API = `https://ghibliapi.vercel.app/films/${id}`;
    const { data } = await axios.get(DETAIL_API);
    return data;
  } catch (error) {
    return error;
  }
};
