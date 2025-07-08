import Card from "react-bootstrap/Card";
import { useState, useEffect, use } from "react";
import UserCard from "../ListItems/UserCard";
import type { User } from "../../types/User";
import { useNavigate } from "react-router-dom";

const PostCard = ({ userId }: { userId: number }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:5000/posts/user${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          console.log();
        } else {
          alert("unathorized");
        }
      } catch (error) {
        console.log(`error ${error}`);
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      fetchPosts;
    }
  }, []);

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
