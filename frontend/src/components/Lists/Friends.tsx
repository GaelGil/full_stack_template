import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import UserCard from "../ListItems/UserCard";
import type { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { getUserFriends } from "../../api/users";

const Friends = ({ userId }: { userId: string }) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token || !userId) {
        return;
      }
      try {
        const userFriends = await getUserFriends(userId, token);
        setFriends(userFriends);
      } catch (error) {
        console.error("Error fetching friends", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchFriends();
    }
  }, [userId]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {loading ? (
            <Card.Header as="h2">Loading</Card.Header>
          ) : friends.length === 0 ? (
            <Card.Header as="h2">No Friends</Card.Header>
          ) : (
            <>
              <Card.Header as="h2">Friends</Card.Header>
              <Card.Subtitle
                onClick={() => navigate(`/friends/${userId}`)}
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                All Friends
              </Card.Subtitle>
              {friends?.map((friend: User) => (
                <UserCard user={friend} key={friend.id} />
              ))}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Friends;
