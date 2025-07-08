import { BASE_URL } from "./url";

export const fetchUserPosts = async (
  userId: number | string,
  token: string
) => {
  const res = await fetch(`${BASE_URL}/posts/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return new Error("Error");
  }
  const data = await res.json();
  return data.post;
};
