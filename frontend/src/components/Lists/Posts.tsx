import Card from "react-bootstrap/Card";
import { useState } from "react";

const PostCard = () => {
  const [friends, setFriends] = useState([]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{post.username}</Card.Title>
          <Card.Text>{post.caption}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
