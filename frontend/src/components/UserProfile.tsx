import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import type { Profile } from "../types/UserProfileProps";
import Friends from "./Lists/Friends";
import { getUserProfile } from "../api/users";

const UserProfile = ({ userId }: { userId: string }) => {
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);
      if (!token || !userId) {
        return;
      }
      try {
        const user = await getUserProfile(userId, token);
        console.log("Fetched user:", user);
        setProfile(user);
      } catch (error) {
        console.error("Error fetching profile:", error);
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
            {loading ? (
              <Card.Title>Loading Profile ... </Card.Title>
            ) : profile ? (
              <>
                <Card.Title>{profile.username}</Card.Title>
                <Card.Subtitle>{profile.email}</Card.Subtitle>
              </>
            ) : (
              <Card.Title>No profile data found</Card.Title>
            )}
          </Card.Body>
        </Card>
        {profile?.id && <Friends userId={String(profile.id)} />}{" "}
      </div>
    </>
  );
};

export default UserProfile;
