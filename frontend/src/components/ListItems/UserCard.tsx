import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import type { UserProps } from "../../types/User";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={`/user/${user.id}`}>{user.username}</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserCard;
