import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import UserCard from "../ListItems/UserCard";
import type { User } from "../../types/User";

const Friends = ({ userId }: { userId: number }) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`http://localhost:5000/friends/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setFriends(data);
        } else {
          alert("unathorized");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Failed to get friends");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : friends.length === 0 ? (
          <div className="loading">No friends</div>
        ) : (
          <Card.Body>
            {friends.map((friend: User) => (
              <UserCard user={friend} key={friend.id} />
            ))}
          </Card.Body>
        )}
      </Card>
    </>
  );
};

export default Friends;
