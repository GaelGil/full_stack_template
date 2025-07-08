const BASE_URL: string = "http://localhost:5000/";

// basic api call to search using an api and return results
export const searcUsers = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/user?&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
