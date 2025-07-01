const BASE_URL: string = "http://localhost:5000/";

// basic api call to get popular movies and return the results from that call
export const getRecentPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts/`);
  const data = await response.json();
  return data.results;
};
