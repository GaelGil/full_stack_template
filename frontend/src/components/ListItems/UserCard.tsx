import Card from "react-bootstrap/Card";
import type { UserProps } from "../../types/User";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserCard;
