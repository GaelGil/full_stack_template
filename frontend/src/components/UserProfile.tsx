import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { useUser } from "../context/UserContext";
// import { getUserProfile } from "../api/users";
import { getCurrentUser } from "../api/auth";
import { getDefaultPhoto } from "../api/helper";
import type { User } from "../types/User";
import { getUser, getUserProfile } from "../api/users";

const UserProfile = ({ userId }: { userId?: string }) => {
  const { user, setUser } = useUser();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const idToFetch = userId || user?.id;

        if (!idToFetch) {
          // Try fetching from /me if user context is not set
          const res = await getCurrentUser();

          if (res.ok) {
            const data = await res.json();
            setUser(data.user);
            setProfile(data.user);
          } else {
            throw new Error("Failed to fetch user");
          }
        } else {
          const data = await getUserProfile(idToFetch);
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, user, setUser, navigate]);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              {loading ? (
                <div className="text-center py-4">
                  <Spinner animation="border" variant="primary" />
                  <Card.Title className="mt-3">Loading Profile...</Card.Title>
                </div>
              ) : profile ? (
                <Row className="align-items-center">
                  <Col xs={4} className="text-center">
                    <Image
                      src={profile.pfp || getDefaultPhoto()}
                      roundedCircle
                      fluid
                      alt="Profile Avatar"
                      className="mb-2"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs={8}>
                    <h4 className="mb-1">@{profile.username}</h4>
                    <div className="d-flex gap-3 mt-2">
                      <Card.Subtitle
                        onClick={() => navigate(`/edit-profile/${profile.id}`)}
                        style={{
                          cursor: "pointer",
                          color: "blue",
                          textDecoration: "underline",
                        }}
                      >
                        Edit Profile
                      </Card.Subtitle>
                    </div>
                  </Col>
                </Row>
              ) : (
                <div className="text-center py-4">
                  <Card.Title>No profile data found</Card.Title>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
