import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

type UserProfileProps = {
  userId?: string; // optional if userId can be undefined
};

type Profile = {
  id: number;
  username: string;
  email: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        alert("Unauthorized");
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          {profile ? (
            <Card.Title>{profile.username}</Card.Title>
          ) : (
            <p>Loading profile...</p>
          )}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProfile;
