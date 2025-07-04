import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import type { UserProfileProps, Profile } from "../types/UserProfileProps";
import Friends from "./Lists/Friends";

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`http://localhost:5000/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        } else {
          alert("unathorized");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Failed to fetch profile");
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
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            {/* <h1>hello</h1> */}
            {loading ? (
              <p>Loading profile...</p>
            ) : profile ? (
              <Card.Title>{profile.username}</Card.Title>
            ) : (
              <p>No profile data found.</p>
            )}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{profile?.email}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Friends userId={profile?.id} />
      </div>
    </>
  );
};

export default UserProfile;
