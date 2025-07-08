const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL: string = "https://api.themoviedb.org/3";

// basic api call to get popular movies and return the results from that call
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// basic api call to search using an api and return results
export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
