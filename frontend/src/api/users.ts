import { BASE_URL } from "./url";

export const fetchUserProfile = async (userId: string, token: string) => {
  const res = await fetch(`${BASE_URL}/profile/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return new Error("Error");
  }
  const data = await res.json();
  return data;
};

export const fetchUserFriends = async (userId: string, token: string) => {
  const res = await fetch(`${BASE_URL}/friends/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return new Error("Error");
  }
  const data = await res.json();
  return data.friends;
};
