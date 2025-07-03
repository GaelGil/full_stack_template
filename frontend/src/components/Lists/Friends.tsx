import Card from "react-bootstrap/Card";
import { useState } from "react";
import type { friend, FriendProps } from "../../types/Friend";

const Friends = ({ userId }) => {
  const [friends, setFriends] = useState([]);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{friend.username}</Card.Title> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default Friends;
