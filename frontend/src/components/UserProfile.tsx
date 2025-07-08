import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
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
      <Container className="vh-100 d-flex align-items-center">
        <Row className="justify-content-center w-100">
          <Col xs={12} md={5} className="mb-4">
            <Card
              className="shadow-sm rounded"
              style={{ minHeight: "220px", padding: "1rem" }}
            >
              <Card.Body className="d-flex flex-column justify-content-center text-center">
                {loading ? (
                  <>
                    <Spinner animation="border" variant="primary" />
                    <Card.Title className="mt-3">Loading Profile...</Card.Title>
                  </>
                ) : profile ? (
                  <>
                    <Card.Title className="mb-2 fs-3">
                      {profile.username}
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                      {profile.email}
                    </Card.Subtitle>
                  </>
                ) : (
                  <Card.Title>No profile data found</Card.Title>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={5}>
            {profile?.id && <Friends userId={String(profile.id)} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
