import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import type { UserFriendsProps } from "../../types/Friend";
import UserCard from "../ListItems/UserCard";
import type { User } from "../../types/User";

const Friends: React.FC<UserFriendsProps> = ({ userId }) => {
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
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {friends.map((friend) => (
            <UserCard user={friend} key={friend.id} />
          ))}
        </div>
      )}

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{friend.username}</Card.Title> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default Friends;
